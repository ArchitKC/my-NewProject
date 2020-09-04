import { NgModule } from '@angular/core';
import { RecipeResolver } from './../services/recipe.resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeInitialComponent } from './recipe-initial/recipe-initial.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../services/auth.guard';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeInitialComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolver]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolver]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
