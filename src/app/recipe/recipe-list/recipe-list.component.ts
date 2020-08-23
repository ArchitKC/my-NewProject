import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.modal';
import { RecipeService } from './../../services/recipe.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe(
      (recipe) =>{
        this.recipes = recipe;
      });
    this.recipes = this.recipeService.getRecipes();
  }

  // tslint:disable-next-line: typedef
  onNewClick(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
