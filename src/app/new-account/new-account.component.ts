import { AccountServices } from '../services/account.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(
    private accountService: AccountServices
  ) {
    this.accountService.statusUpdate.subscribe(
      (status: string) => alert('New status: ' + status)
      );
    }

  // tslint:disable-next-line: typedef
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.accountAdd(accountName, accountStatus);
  }
}
