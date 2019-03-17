import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  // listens to new Event
  recipeSelected = new EventEmitter<Recipe>();

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

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
