import { User } from './../auth/user.modules';
import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { HttpServices } from './../services/data.storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private httpServices: HttpServices,
    private authService: AuthService){}

    // tslint:disable-next-line: typedef
    ngOnInit(){
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !user ? false : true;
        // this.isAuthenticated = !!user;
      });
    }

    // tslint:disable-next-line: typedef
    ngOnDestroy(){
      this.userSub.unsubscribe();
    }

  // tslint:disable-next-line: typedef
  onSaveRecipe(){
    this.httpServices.storeRecipe();
  }

  // tslint:disable-next-line: typedef
  onFetchRecipe(){
    this.httpServices.fetchRecipe().subscribe();
  }

  // tslint:disable-next-line: typedef
  onLogOut(){}
}
