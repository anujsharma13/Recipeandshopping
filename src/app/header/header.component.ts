import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    templateUrl:'./header.component.html',
    selector:'app-header'
})
export class HeaderComponent
{
    collapsed = true;

}