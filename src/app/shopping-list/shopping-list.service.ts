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
        this.ingredients.push(...ingredients); //... is help in pushing multiple elements
        this.ingredientchanged.emit(this.ingredients.slice());
      }
      updateingredient(id:number,ingredient:Ingredient)
      {
        this.ingredients[id]=ingredient;
        this.ingredientchanged.emit(this.ingredients.slice());
      }
      deleteingredient(index:number)
      {
        this.ingredients.splice(index,1); //delete from index 1 value
        this.ingredientchanged.emit(this.ingredients.slice());
      }
}