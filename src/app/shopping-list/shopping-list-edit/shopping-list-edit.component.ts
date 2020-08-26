import { ShoppingListService } from '../../services/shoppinglist.service';
import { Ingredient } from './../../shared/ingredient.modal';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: typedef-whitespace
  @ViewChild('form') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editShoppingNumber: number;
  shoppingItem: Ingredient ;

  constructor(private shoppingLsService: ShoppingListService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.subscription = this.shoppingLsService.editShoppingList.
    subscribe((id: number) => {
      this.editMode = true;
      this.editShoppingNumber = id;
      this.shoppingItem = this.shoppingLsService.getIngredientById(this.editShoppingNumber);
      this.shoppingForm.setValue({
        name: this.shoppingItem.name,
        amount: this.shoppingItem.amount
      });
    });
  }

  // tslint:disable-next-line: typedef
  onAddItem(){
    const newIngredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
    if (this.editMode === false){
      this.shoppingLsService.addIngredient(newIngredient);
    }else{
      this.shoppingLsService.updateIngredient(this.editShoppingNumber, newIngredient);
    }
    this.editMode = false;
    this.shoppingForm.reset();
  }

  // tslint:disable-next-line: typedef
  onDeleteItem(){
    this.shoppingLsService.onDeleteShoppingList(this.editShoppingNumber);
    this.editMode = false;
  }

  // tslint:disable-next-line: typedef
  onClearItem(){
    this.editMode = false;
    this.editShoppingNumber = -1;
    this.shoppingForm.reset();
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
