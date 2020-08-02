import { Component, OnInit } from '@angular/core';
import {Recipe} from './../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
    'let us see if this works well',
    'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg'),
    new Recipe('A test recipe',
    'let us see if this works well',
    'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
