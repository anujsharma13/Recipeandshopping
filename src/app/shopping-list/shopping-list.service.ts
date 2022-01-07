import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    ingredientchanged=new EventEmitter<Ingredient[]>();
    startedediting=new Subject<number>();
    private ingredients: Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("tomatos",5),
        
      ];
      getingredients()
      {
          return this.ingredients.slice();
      }
      getIngredient(index:number)
      {
        return this.ingredients[index];
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