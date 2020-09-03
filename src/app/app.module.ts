import { RecipeModule } from './recipe/recipe.app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner.component';


import { DropdownDirective } from './shared/dropdown.directive';

import { LoggingServices } from './services/logging.service';
import { AccountServices } from './services/account.service';
import { ShoppingListService } from './services/shoppinglist.service';
import { RecipeService } from './services/recipe.service';
import { AuthService } from './services/auth.service';
import { HttpServices } from './services/data.storage.service';
import { AuthInterceptor } from './services/auth.interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    PageNotFoundComponent,
    AuthComponent,
    LoadingSpinner
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule
  ],
  providers: [
    AccountServices,
    LoggingServices,
    ShoppingListService,
    HttpServices,
    RecipeService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
