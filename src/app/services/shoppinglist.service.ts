import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { Subject } from 'rxjs';

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  editShoppingList = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('orange', 10)
  ];

  // tslint:disable-next-line: typedef
  getIngredient(){
    return this.ingredients.slice();
  }

  // tslint:disable-next-line: typedef
  getIngredientById(index: number){
    return this.ingredients[index];

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

  // tslint:disable-next-line: typedef
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // tslint:disable-next-line: typedef
  onDeleteShoppingList(index: number){
    const ingredientDel = this.ingredients;
    ingredientDel.splice(index, 1);
    this.ingredients = ingredientDel;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
