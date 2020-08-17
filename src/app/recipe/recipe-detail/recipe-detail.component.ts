import { RecipeService } from './../../services/recipe.services';
import { Recipe } from '../../shared/recipe.modal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit  {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    // tslint:disable-next-line: typedef
    ngOnInit(){
      this.route.params.subscribe((param: Params) => {
        this.id = +param.id;
        this.recipe = this.recipeService.getRecipeById(this.id);
        if(this.recipe === undefined){
          this.router.navigate(['not-found']);
        }
      });
    }

    // tslint:disable-next-line: typedef
    onEdit(){
      this.router.navigate(['edit'], {relativeTo: this.route});
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

  // tslint:disable-next-line: typedef
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }
}
