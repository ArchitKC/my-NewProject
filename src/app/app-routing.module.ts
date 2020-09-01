import { AuthComponent } from './auth/auth.component';
import { RecipeResolver } from './services/recipe.resolver.service';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AccountComponent } from './account/account.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeInitialComponent } from './recipe/recipe-initial/recipe-initial.component';
import { RecipeComponent } from './recipe/recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoute: Routes = [
  // {path: '', redirectTo: 'recipe',  pathMatch: 'full'},

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path: 'auth', component: AuthComponent},
  {path: 'recipe', component: RecipeComponent,
  children: [
    {path: '', component: RecipeInitialComponent},
    {path: 'edit', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolver]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolver]}
  ]},
  {path: 'shoppingList', component: ShoppingListComponent,
  children: [
    {path: 'edit', component: ShoppingListEditComponent}
  ]},
  {path: 'viewService', component: AccountComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoute, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
