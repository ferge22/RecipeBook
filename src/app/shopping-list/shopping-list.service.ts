import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';


export class ShoppingListService {

  ingreduentsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingreduentsChanged.next(this.ingredients.slice());
  }

  // from recipe service
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingreduentsChanged.next(this.ingredients.slice());

  }

}
