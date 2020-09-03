import { RecipeResolver } from './../services/recipe.resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeInitialComponent } from './recipe-initial/recipe-initial.component';
import { AuthGuard } from './../services/auth.guard';
import { RecipeComponent } from './recipe.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const recipeRoute: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeInitialComponent },
      { path: 'edit', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolver] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolver] }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(recipeRoute)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
