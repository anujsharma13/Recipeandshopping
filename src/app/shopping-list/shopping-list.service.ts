import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    ingredientchanged=new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("tomatos",5),
        
      ];
      getingredients()
      {
          return this.ingredients.slice();
      }
      addIngredient(ingredient:Ingredient)
      {
          this.ingredients.push(ingredient);
          this.ingredientchanged.emit(this.ingredients.slice());
      }
      addIngredients(ingredients:Ingredient[])
      {
        // for(let Ingredient of ingredients)
        // {
        //     this.addIngredient(Ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientchanged.emit(this.ingredients.slice());
      }
}