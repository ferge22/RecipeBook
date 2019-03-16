import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  // listens to new Event
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
  ];

  getRecipes() {
    // slice for copy of array
    return this.recipes.slice();
  }

}
