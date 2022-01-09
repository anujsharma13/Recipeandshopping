import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subscription:Subscription;
  constructor(private recipeservice:RecipeService,private router:Router,private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
   this.subscription= this.recipeservice.recipesChanged.subscribe(
      (recipes:Recipe[])=>
      {
        this.recipes=recipes;
      }
    )
    this.recipes=this.recipeservice.getrecipes();
   
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  onnewrecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
