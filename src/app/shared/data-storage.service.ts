import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-7f9b1.firebaseio.com/data.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    // console.log(token);
    return this.http.get('https://ng-recipe-book-7f9b1.firebaseio.com/data.json?auth=' + token)
      .subscribe(
        (response: any[]) => {
          console.log(response);
          this.recipeService.setRecipes(response);
        }
      );
  }
}


