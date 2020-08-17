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
  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // tslint:disable-next-line: typedef
  addIngredient(ingredient: Ingredient){
    // tslint:disable-next-line: prefer-const
    // for (let ingredeintitem of ingredient){
    //   this.ingredients.push(ingredeintitem);
    // }
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
