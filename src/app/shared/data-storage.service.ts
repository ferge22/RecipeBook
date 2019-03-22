import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()

export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-7f9b1.firebaseio.com/data.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-7f9b1.firebaseio.com/data.json')
      .subscribe(
        (response: any[]) => {
          console.log(response);
          this.recipeService.setRecipes(response);
        }
      );
  }
}


