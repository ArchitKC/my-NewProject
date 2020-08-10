import { Ingredient } from './../shared/ingredient.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('orange', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addItem(eventData: Ingredient){
    this.ingredients.push(eventData);
  }
}
