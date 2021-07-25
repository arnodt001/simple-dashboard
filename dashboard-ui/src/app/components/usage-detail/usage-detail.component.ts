import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../model/user.model";
import {Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-usage-detail',
  templateUrl: './usage-detail.component.html',
  styleUrls: ['./usage-detail.component.css']
})
export class UsageDetailComponent implements OnInit, OnDestroy {

  doughnutChartLabels: Label[] = ['Usage', 'Not Used'];
  doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = 'doughnut';

  selectedUser?: User;
  selectedUserSubscriptionActive = true;
  usersLoadedSubscriptionActive = true;
  userDataLoaded = false;

  constructor(private usersService: UsersService) {
  }

  /**
   * Subscribe to the selected user and users loaded  subject.
   * Updates the view with the selected user and populates the chart.
   */
  ngOnInit(): void {
    this.usersService.userSelected.asObservable()
      .pipe(takeWhile(() => this.selectedUserSubscriptionActive))
      .subscribe((user: User | undefined) => {
        this.selectedUser = user;
        if (user) {
          this.doughnutChartData = [[user.usageInBytes, (user.capAllocationInBytes - user.usageInBytes)]];
        }
      })

    this.usersService.usersLoaded.asObservable()
      .pipe(takeWhile(() => this.usersLoadedSubscriptionActive))
      .subscribe((status) => {
        this.userDataLoaded = status ? status : false;
      })
  }

  /**
   * Unsubscribe to prevent memory leaks.
   */
  ngOnDestroy() {
    this.selectedUserSubscriptionActive = false;
    this.usersLoadedSubscriptionActive = false;
  }
}
