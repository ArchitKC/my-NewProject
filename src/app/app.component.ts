import { AccountServices } from './services/account.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
// tslint:disable-next-line: no-inferrable-types
  loadedLinkPage: string = '';
  accounts: {name: string, status: string}[] = [];
  constructor(
    private accountService: AccountServices
      ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
  // tslint:disable-next-line: typedef
  navigatePage(featureData: string){
      this.loadedLinkPage = featureData;
  }
}
