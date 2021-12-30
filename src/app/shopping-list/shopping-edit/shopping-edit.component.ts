import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slservice:ShoppingListService) { }
  @ViewChild('nameinput') nameinputref:ElementRef;
  @ViewChild('amountinput') amountinputref:ElementRef;


  ngOnInit(): void {
  }
  
  onadditem()
  {
    const ingname=this.nameinputref.nativeElement.value;
    const ingamt=this.amountinputref.nativeElement.value;

    const newIngredient=new Ingredient(ingname,ingamt);
    this.slservice.addIngredient(newIngredient);
  }

}
