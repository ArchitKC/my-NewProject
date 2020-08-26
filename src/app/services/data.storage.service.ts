import { Recipe } from './../shared/recipe.modal';
import { RecipeService } from './recipe.service';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable()

export class HttpServices{

  baseUrl = 'https://recipeshopping-27e5f.firebaseio.com/recipe.json';

  constructor(
    private http: HttpClient,
    private recipeServices: RecipeService
  ){}

  // tslint:disable-next-line: typedef
  storeRecipe(){
    const recipe = this.recipeServices.getRecipes();
    this.http.put(this.baseUrl, recipe)
    .subscribe(() => {
      console.log('success');
    });
  }

  // tslint:disable-next-line: typedef
  fetchRecipe(){
    return this.http.get<Recipe[]>(this.baseUrl)
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients : recipe.ingredients ? recipe.ingredients : []};
      });
    }), tap(recipeFetch => {
      this.recipeServices.setRecipe(recipeFetch);
    }));
  }
}
