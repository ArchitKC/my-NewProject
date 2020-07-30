import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListEditComponent } from './Shopping/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
