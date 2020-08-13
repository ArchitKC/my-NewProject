import { LoggingServices } from './logging.services';
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

  accountAdd(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.consolelogging(status);
  }

  updateAccount(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.consolelogging(status);
  }
}
