import { AccountServices } from './../services/account.services';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    private accountService: AccountServices,
  ) {}

  // tslint:disable-next-line: typedef
  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    this.accountService.statusUpdate.emit(status);
  }
}
