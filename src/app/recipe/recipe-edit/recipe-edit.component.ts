import { Recipe } from './../../shared/recipe.modal';
import { Ingredient } from './../../shared/ingredient.modal';
import { RecipeService } from './../../services/recipe.services';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  formRecipeEdit: FormGroup;

  // tslint:disable-next-line: typedef
  get ingredientsControls() {
    return (this.formRecipeEdit.get('ingredients') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
    ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeId = +params.id;
          this.editMode = params.id != null;
          this.formInit();
        });
  }

  // tslint:disable-next-line: typedef
  onAddIngredient(){
    (this.formRecipeEdit.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    console.log(this.formRecipeEdit.value);
    if (this.editMode){
      this.recipeService.updateRecipe(this.formRecipeEdit.value, this.recipeId);
    }else{
      this.recipeService.addRecipe(this.formRecipeEdit.value);
    }
  }

  // tslint:disable-next-line: typedef
  onRemoveIngredient(){}

  // tslint:disable-next-line: typedef
  private formInit(){
    let recipeName = '';
    let recipeURL = '';
    let recipeDescription = '';
    // tslint:disable-next-line: prefer-const
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.recipeId);
      recipeName = recipe.name;
      recipeURL = recipe.imagePath;
      recipeDescription = recipe.description;
      // tslint:disable-next-line: no-string-literal
      if (recipe['ingredients']) {
        // tslint:disable-next-line: prefer-const
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              // tslint:disable-next-line: object-literal-key-quotes
              'name': new FormControl(ingredient.name, Validators.required),
              // tslint:disable-next-line: object-literal-key-quotes
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.formRecipeEdit = new FormGroup({
      // tslint:disable-next-line: object-literal-key-quotes
      'name': new FormControl(recipeName, Validators.required),
      // tslint:disable-next-line: object-literal-key-quotes
      'imagePath': new FormControl(recipeURL, Validators.required),
      // tslint:disable-next-line: object-literal-key-quotes
      'description' : new FormControl(recipeDescription),
      // tslint:disable-next-line: object-literal-key-quotes
      'ingredients': recipeIngredients
    });
  }
}
