import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';


export class ShoppingListService {

  ingreduentsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
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

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingreduentsChanged.next(this.ingredients.slice());
  }

  deleteIngredint(index: number) {
    this.ingredients.splice(index, 1);
    this.ingreduentsChanged.next(this.ingredients.slice());
  }

}
