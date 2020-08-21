import { ShoppingListService } from './shoppinglist.services';
import { Injectable } from '@angular/core';
import {Recipe} from '../shared/recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';

@Injectable()
export class RecipeService{

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
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
}
