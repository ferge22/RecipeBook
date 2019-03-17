import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) {}

  // kai uzkrauna iskart daro si coda
  ngOnInit() {
    this.activatedRoute.params
    .subscribe (
      (params: Params) => {
        this.id = +params.id; // gauni id is routerio  kur :id //0,1
         // gaunu pati individualu recepta pagal id is recipe service, ji priskiriu this.recipe
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['/edit'], {relativeTo: this.activatedRoute});
  }

}
