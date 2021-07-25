import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {UsersService} from "../../services/users.service";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  selectedUser?: User;
  users: User[] = [];
  isFetching = true;
  errorMsg = undefined;
  userServiceActive = true;

  /**
   * Inject UsersServer in component
   * @param usersService
   */
  constructor(private usersService: UsersService) {
  }

  /**
   * Notify subscribers users are not loaded
   * Trigger loading of users from service
   */
  ngOnInit(): void {
    this.usersService.usersLoaded.next(false);
    this.fetchUsers().then(loading => {
      this.isFetching = loading;
    });
  }

  /**
   * Row select event
   * Set current selected user and notify subscriber user is selected
   * @param selectedUser
   */
  onRowSelected(selectedUser: User) {
    this.selectedUser = selectedUser;
    this.usersService.userSelected.next(selectedUser);
  }

  /**
   * Unsubscribe to prevent memory leaks.
   */
  ngOnDestroy(): void {
    this.userServiceActive = false;
  }

  /**
   * Fect users async from server and handle errors
   * @private
   */
  private async fetchUsers() {
    return new Promise<boolean>((resolve) => {
      this.usersService.fetchUsers()
        .pipe(takeWhile(() =>
          this.userServiceActive
        ))
        .subscribe(
          retUsers => {
            this.users = retUsers;
          },
          error => {
            this.errorMsg = error.message;
            resolve(false);
          }, () => {
            resolve(false);
            this.usersService.usersLoaded.next(true);
          })
    });
  }
}
