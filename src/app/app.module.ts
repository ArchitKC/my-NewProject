import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeInitialComponent } from './recipe/recipe-initial/recipe-initial.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { LoggingServices } from './services/logging.services';
import { AccountServices } from './services/account.services';
import { ShoppingListService } from './services/shoppinglist.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    PageNotFoundComponent,
    RecipeInitialComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AccountServices,
    LoggingServices,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
