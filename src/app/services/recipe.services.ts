import { ShoppingListService } from './shoppinglist.services';
import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from '../shared/recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService){

  }
  private recipes: Recipe[] = [
    new Recipe('A test recipe',
    'let us see if this works well',
    'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('frenchFries', 20)
    ]),

    new Recipe('A new tested recipe',
    'this is working as per plan',
    'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg',
    [
      new Ingredient('bread', 2),
      new Ingredient('bacon', 2),
      new Ingredient('cheese', 1)
    ])
  ];

  // tslint:disable-next-line: typedef
  getrecipecontent(){
    return this.recipes.slice();
  }

  // tslint:disable-next-line: typedef
  addIngredienttoShopping(ingredients: Ingredient[]){
    this.shoppingListService.addIngredient(ingredients);
  }
}
