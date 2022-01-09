import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 @ViewChild('f') slform:NgForm;
  subscription: Subscription;
 editMode=false;
 editeditemindex:number;
 editeditem:Ingredient;
  constructor(private slservice:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.slservice.startedediting.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editeditemindex=index;
        this.editeditem=this.slservice.getIngredient(index);
        this.slform.setValue({
          name:this.editeditem.name,
          amount:this.editeditem.amount
        })
      }
    );
  }
  ngOnDestroy(): void {
     this.subscription.unsubscribe(); 
  }
  onadditem(form:NgForm)
  {
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode)
    this.slservice.updateingredient(this.editeditemindex,newIngredient);
    else
    this.slservice.addIngredient(newIngredient);
    this.editMode=false;
    form.reset();
  }
  onclear()
  {
    this.slform.reset();
    this.editMode=false;
  }
  ondelete()
  {
    this.onclear();
    this.slservice.deleteingredient(this.editeditemindex);
  }
}
