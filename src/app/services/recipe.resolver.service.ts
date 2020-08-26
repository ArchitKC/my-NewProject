import { RecipeService } from './recipe.service';
import { HttpServices } from './data.storage.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Recipe } from '../shared/recipe.modal';

@Injectable({providedIn: 'root'})
export class RecipeResolver implements Resolve<Recipe[]>{

  constructor(
    private httpService: HttpServices,
    private recipeService: RecipeService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.httpService.fetchRecipe();
    } else {
      return recipes;
    }
  }
}
