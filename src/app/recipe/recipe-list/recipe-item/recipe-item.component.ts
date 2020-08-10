import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() selectedItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  recipeItemClick(){
    this.selectedItem.emit();
  }
}
