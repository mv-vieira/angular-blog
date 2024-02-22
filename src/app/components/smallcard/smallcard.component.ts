import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrl: './smallcard.component.css'
})
export class SmallcardComponent {
  @Input()
  smallCardImage:string = ""

  @Input()
  smallCardTitle:string = ""

  @Input()
  id:string = "";

  constructor(){

  }
}
