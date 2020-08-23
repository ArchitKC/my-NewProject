import { Subject } from 'rxjs';
import { ShoppingListService } from './shoppinglist.services';
import { Injectable } from '@angular/core';
import {Recipe} from '../shared/recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';

@Injectable()
export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Omlette', 2)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Bacon', 1),
        new Ingredient('Burger', 1),
        new Ingredient('Cheese', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  // tslint:disable-next-line: typedef
  getRecipes() {
    return this.recipes.slice();
  }

  // tslint:disable-next-line: typedef
  getRecipe(index: number) {
    return this.recipes[index];
  }

  // tslint:disable-next-line: typedef
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  // tslint:disable-next-line: typedef
  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  // tslint:disable-next-line: typedef
  updateRecipe(updateRecipe: Recipe, index: number){
    this.recipes[index] = updateRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}
