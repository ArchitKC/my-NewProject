import { Ingredient } from './../../shared/ingredient.modal';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // tslint:disable-next-line: typedef-whitespace
  @ViewChild('nameInput') nameInputValue: ElementRef;
  @ViewChild('amountInput') amountInputValue: ElementRef;
  @Output() ingredientOutput = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddItem(){
    const nameValue = this.nameInputValue.nativeElement.value;
    const amountValue = this.amountInputValue.nativeElement.value;
    const ingredientData = new Ingredient(nameValue, amountValue);
    this.ingredientOutput.emit(ingredientData);
    this.nameInputValue.nativeElement.value = '';
    this.amountInputValue.nativeElement.value = '';

  }
}
