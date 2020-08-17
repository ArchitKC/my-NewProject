import { AccountServices } from './../services/account.services';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];
  id: number;

  constructor(
    private accountService: AccountServices,
  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
  // tslint:disable-next-line: typedef
  onSetTo(status: string, id: number) {
    this.accountService.updateAccount(id, status);
    this.accountService.statusUpdate.emit(status);
  }
}
