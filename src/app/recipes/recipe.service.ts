import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService
{
  constructor(private slservice:ShoppingListService)
  {

  }
  recipeselected=new EventEmitter<Recipe>();
   private recipes: Recipe[]=[
        new Recipe('a','b','https://wallpapersdsc.net/wp-content/uploads/2016/09/Junk-Food-Pictures.jpg',[
          new Ingredient('meat',1),
          new Ingredient('fries',2)
        ]),
      new Recipe('b','a','https://wallpapersdsc.net/wp-content/uploads/2016/09/Junk-Food-Pictures.jpg',[
        new Ingredient('ing1',1),
        new Ingredient('ing2',2)
      ])
      ];
      getrecipes()
      {
          return this.recipes.slice();
      }
      getRecipe(index:number)
      {
        return this.recipes.slice()[index];
      }
      addingredientstoshoppinglist(ingredients:Ingredient[])
      {
        this.slservice.addIngredients(ingredients);
      }
}