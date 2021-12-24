import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    templateUrl:'./header.component.html',
    selector:'app-header'
})
export class HeaderComponent
{
    collapsed = true;
  @Output()  featureselected=new EventEmitter<string>();
    onselect(feature:any)
    {
        this.featureselected.emit(feature);
    }
}