import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router, Routes } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipeservice:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
    (params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeservice.getRecipe(this.id);
    }
    )
  }
  onaddtoshoppinglist()
  {
    this.recipeservice.addingredientstoshoppinglist(this.recipe.ingredients);
  }
  oneditrecipe()
  {
    this.router.navigate(['edit'],{relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }
  onDeleteRecipe()
  {
    this.recipeservice.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
