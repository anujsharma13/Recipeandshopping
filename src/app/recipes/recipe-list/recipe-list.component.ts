import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipewasselected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A test recipe','this is simply a test','https://www.midgetmomma.com/wp-content/uploads/2019/03/Avocado-Toast-Recipe-5.jpg'),
    new Recipe('Another test recipe','this is simply a test','https://www.midgetmomma.com/wp-content/uploads/2019/03/Avocado-Toast-Recipe-5.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onrecipeselected(recipe:Recipe)
  {
    this.recipewasselected.emit(recipe);
  }
}
