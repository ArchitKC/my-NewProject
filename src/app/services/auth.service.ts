import { Router } from '@angular/router';
import { User } from './../auth/user.modules';
import { throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, repeat } from 'rxjs/operators';

export interface AuthToken{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn : 'root'})
export class AuthService{

  user = new BehaviorSubject<User>(null);
  tokenExpirationTimeOut: any;

  baseSignURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  baseLoginURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  webAPIKey = 'AIzaSyDmsUgUGTpcJk58CrtI0a3gWnSwi3_X2hM';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  // tslint:disable-next-line: typedef
  signUp(email: string, password: string) {
    const webApiURL = this.baseSignURL + this.webAPIKey;
    return this.httpClient.post<AuthToken>(webApiURL, {
      // tslint:disable-next-line: object-literal-shorthand
      email: email,
      // tslint:disable-next-line: object-literal-shorthand
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.errorHandling),
    tap(respData => {
      this.handleAuthentication(
        respData.email,
        respData.localId,
        respData.idToken,
        +respData.expiresIn);
      }));
  }

  // tslint:disable-next-line: typedef
  autoLogin(){
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogOut(expirationDuration);
    }
  }

  // tslint:disable-next-line: typedef
  autoLogOut(expirationTimeOut: number){
    this.tokenExpirationTimeOut = setInterval(() => {
      this.logout();
    }, expirationTimeOut);
  }

  // tslint:disable-next-line: typedef
  login(email: string, password: string){
    const webApiURL = this.baseLoginURL + this.webAPIKey;
    return this.httpClient.post<AuthToken>(webApiURL, {
      // tslint:disable-next-line: object-literal-shorthand
      email: email,
      // tslint:disable-next-line: object-literal-shorthand
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.errorHandling),
    tap(respData => {
      this.handleAuthentication(
        respData.email,
        respData.localId,
        respData.idToken,
        +respData.expiresIn);
    }));
  }

  // tslint:disable-next-line: typedef
  logout(){
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
    if (!this.tokenExpirationTimeOut){
      clearTimeout(this.tokenExpirationTimeOut);
    }
    this.tokenExpirationTimeOut = null;
  }

  // tslint:disable-next-line: typedef
  private errorHandling(errorResp: HttpErrorResponse){
    let errorMessage = 'An error occurred while login!!!';
    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMessage);
    } else {
      switch (errorResp.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'Email not found!!!';
          break;
        case 'EMAIL_EXISTS':
          errorMessage = 'Email already exists!!!';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid Password provided!!!';
          break;
        case 'USER_DISABLED':
          errorMessage = 'Email is been disabled!!!';
          break;
      }
      return throwError(errorMessage);
    }
  }

  // tslint:disable-next-line: typedef
  private handleAuthentication(email: string, localId: string, token: string, expiresIn: number){
    const expirationDate = new Date(
      new Date().getTime() + +expiresIn * 1000
    );
    const newUser = new User(
      email,
      localId,
      token,
      expirationDate
    );
    this.user.next(newUser);
    this.autoLogOut(+expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(newUser));
  }
}
