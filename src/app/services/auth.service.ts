import { User } from './../auth/user.modules';
import { throwError, Subject } from 'rxjs';
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

  user = new Subject<User>();

  baseSignURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  baseLoginURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  webAPIKey = 'AIzaSyDmsUgUGTpcJk58CrtI0a3gWnSwi3_X2hM';

  constructor(
    private httpClient: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  signUp(email: string, password: string) {
    const webApiURL = this.baseSignURL + this.webAPIKey;
    return this.httpClient.post<AuthToken>(webApiURL, {
      email: email,
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
  login(email: string, password: string){
    const webApiURL = this.baseLoginURL + this.webAPIKey;
    return this.httpClient.post<AuthToken>(webApiURL, {
      email: email,
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
  }
}
