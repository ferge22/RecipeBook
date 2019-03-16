import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
  ];

  getRecipes(){
    // slice for copy of array
    return this.recipes.slice();
  }

}
