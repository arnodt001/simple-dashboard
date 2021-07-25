import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {User} from "../model/user.model";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";
import {ConverterUtil} from "../utils/converter.util";


/**
 * Service defines the rest call to backend and subscriptions
 */
@Injectable({providedIn: "root"})
export class UsersService {
  url: string = "http://localhost:3500/api/dashboard/users";

  // Subscription to notify components if a user is selected from user list
  userSelected: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  // Subscription to notify components if users data is busy loading
  usersLoaded: BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(undefined);

  /**
   * Inject http client in service
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Preforms GET request to backend to fetch users
   * Enrich User by calculating usage ratio between used data and allocated cap
   * Return a sorted by usage list of users
   */
  fetchUsers() {
    return this.http
      .get<User[]>(
        this.url
      )
      .pipe(
        map(users => {
          for (let user of users) {
            if (user.capAllocationInBytes) {
              user.usageRatio = ConverterUtil.toByteRatio(user.usageInBytes, user.capAllocationInBytes);
            }
          }
          return this.sortUserByUsage(users);
        }));
  }

  /**
   * Sort users DESC by usage
   * @param users
   */
  sortUserByUsage(users: User[]): User[] {
    return users.sort((u1: User, u2: User) => {
      if (u1.usageInBytes > u2.usageInBytes) {
        return -1;
      }
      if (u1.usageInBytes < u2.usageInBytes) {
        return 1;
      }
      return 0;
    });
  }
}
