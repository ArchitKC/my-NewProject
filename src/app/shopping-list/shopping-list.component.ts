import { ShoppingListService } from './../services/shoppinglist.services';
import { Ingredient } from './../shared/ingredient.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients =  this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientsChanged
    .subscribe((ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    });
  }
}