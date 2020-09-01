import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

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
      .pipe(catchError(this.errorHandling));
  }

  // tslint:disable-next-line: typedef
  login(email: string, password: string){
    const webApiURL = this.baseLoginURL + this.webAPIKey;
    return this.httpClient.post<AuthToken>(webApiURL, {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.errorHandling));
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
}
