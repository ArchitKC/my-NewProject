import { AuthService } from './auth.service';
import { Recipe } from './../shared/recipe.modal';
import { RecipeService } from './recipe.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class HttpServices{

  baseUrl = 'https://recipeshopping-27e5f.firebaseio.com/recipe.json';

  constructor(
    private http: HttpClient,
    private recipeServices: RecipeService,
    private authService: AuthService
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
      return recipes
      .map(recipe => {
        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
      });
    }),
    tap(recipeFetch => {
      this.recipeServices.setRecipe(recipeFetch);
    }));
  }
}
