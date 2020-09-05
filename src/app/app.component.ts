import { AuthService } from './services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private authService: AuthService,
    // private store: Store<fromApp.AppState>,
    @Inject(PLATFORM_ID) private platformID
  ){}

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.authService.autoLogin();

    if (isPlatformBrowser(this.platformID)){
      // this.store.dispatch(new AuthActions.AutoLogin());
    }
  }
}
