import { RecipeResolver } from './../services/recipe.resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeInitialComponent } from './recipe-initial/recipe-initial.component';
import { AuthGuard } from './../services/auth.guard';
import { RecipeComponent } from './recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeInitialComponent
      },
      {
        path: 'edit',
        component:
        RecipeEditComponent
      },
      {
        path: ':id', component:
        RecipeDetailComponent,
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
