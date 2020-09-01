import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthToken } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
    // this.errorMessage = '';
  }

  // tslint:disable-next-line: typedef
  onSubmit(authForm: NgForm){
    this.successMessage = '';
    this.errorMessage = '';
    if (authForm.valid){
      this.isLoading = true;
      let authObservable: Observable<AuthToken>;
      if (this.isLoginMode) {
        authObservable = this.authService.login(authForm.value.email, authForm.value.password);
      }
      else {
        authObservable = this.authService.signUp(authForm.value.email, authForm.value.password);
      }

      authObservable.subscribe((responseData) => {
        console.log(responseData);
        this.successMessage = 'Success!!!';
        this.isLoading = false;
        this.router.navigate(['/recipe']);

      }, (errorMessage) => {
        this.errorMessage = errorMessage;
        this.isLoading = false;
      });
    }
    authForm.reset();
  }
}
