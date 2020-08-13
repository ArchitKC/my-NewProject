import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../shared/recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe',
    'let us see if this works well',
    'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg'),
    new Recipe('A new tested recipe',
    'this is working as per plan',
    'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onItemClick(recipeSelected: Recipe){
    this.recipeWasSelected.emit(recipeSelected);
  }
}
