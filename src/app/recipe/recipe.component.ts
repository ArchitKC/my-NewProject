import { Recipe } from './recipe.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  recipeSelectedFrom(recipeItemSelected: Recipe){
    this.selectedRecipe = recipeItemSelected;
  }
}
