import { AlertComponent } from './../shared/alert/alert.component';
import { PlaceholderDirective } from './../shared/placeholder/placeholder.directive';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService, AuthToken } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {

  isLoginMode = true;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnDestroy(){
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
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
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      });
    }
    authForm.reset();
  }

  private showErrorAlert(message: string) {
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
