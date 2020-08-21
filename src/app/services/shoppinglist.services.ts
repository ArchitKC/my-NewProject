import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.modal';

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('orange', 10)
  ];

  // tslint:disable-next-line: typedef
  getIngredient(){
    return this.ingredients.slice();
  }

  // tslint:disable-next-line: typedef
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // tslint:disable-next-line: typedef
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
