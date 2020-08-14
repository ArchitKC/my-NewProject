import { Ingredient } from './ingredient.modal';
export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredient: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredient: Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    ingredient = ingredient;
  }
}
