import { RecipeService } from './../../../services/recipe.services';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../shared/recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  recipeItemClick(){
    this.recipeService.recipeSelected.emit(this.recipeItem);

  }
}
