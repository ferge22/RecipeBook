import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Ultra Burger',
    'Super Flavory Burger!',
    'https://migogodense.dk/wp-content/uploads/2018/11/Aburgernator-800x480.jpg',
    [
      new Ingredient('Buns', 1),
      new Ingredient('Meat ', 2),
      new Ingredient('Cheese ', 4)
    ]),
    new Recipe('Shrimp Mix',
    'Delicious tasty Sea food!',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    [
      new Ingredient('Big Shrimp', 6),
      new Ingredient('Cucumber ', 2)
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // slice for copy of array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]; // pvz 0,1 receptai
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] =  newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

}
