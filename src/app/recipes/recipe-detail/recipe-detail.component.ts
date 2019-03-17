import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number; //2

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {}

  //
  ngOnInit() {
    this.activatedRoute.params
    .subscribe (
      (params: Params) => {
        this.id = +params.id; // gauni id is routerio  kur :id
         // gaunu pati individualu recepta pagal id is recipe service, ji priskiriu this.recipe
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
