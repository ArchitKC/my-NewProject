import { ShoppingListService } from './../../services/shoppinglist.services';
import { Ingredient } from './../../shared/ingredient.modal';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // tslint:disable-next-line: typedef-whitespace
  @ViewChild('nameInput') nameInputValue: ElementRef;
  @ViewChild('amountInput') amountInputValue: ElementRef;

  constructor(private shoppingLsService: ShoppingListService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  onAddItem(){
    const ingName = this.nameInputValue.nativeElement.value;
    const ingAmount = this.amountInputValue.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingLsService.addIngredient(newIngredient);
    this.nameInputValue.nativeElement.value = '';
    this.amountInputValue.nativeElement.value = '';

  }
}