import { LoggingServices } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountServices {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(
    private loggingService: LoggingServices
    ) {}

  statusUpdate = new EventEmitter<string>();

  // tslint:disable-next-line: typedef
  accountAdd(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.consolelogging(status);
  }

  // tslint:disable-next-line: typedef
  updateAccount(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.consolelogging(status);
  }
}
