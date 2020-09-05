import { CoreModule } from './core.module';
import { authModule } from './auth/auth.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { RecipeModule } from './recipe/recipe.app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
    DropdownDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingModule,
    authModule,
    CoreModule
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
