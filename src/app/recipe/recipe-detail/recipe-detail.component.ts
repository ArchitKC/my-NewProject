import { RecipeService } from './../../services/recipe.services';
import { Recipe } from '../../shared/recipe.modal';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent  {
  @Input() recipe: Recipe;
  constructor(
    private recipeService: RecipeService
    ) { }

  // tslint:disable-next-line: typedef
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }
}
