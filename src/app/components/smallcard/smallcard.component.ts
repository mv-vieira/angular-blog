import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrl: './smallcard.component.css'
})
export class SmallcardComponent {
  @Input()
  smallCardImage:string = "https://embarcados.com.br/wp-content/uploads/2014/03/imagem-de-destaque-28-850x510.png"

  @Input()
  smallCardTitle:string = "Nova versão do Angular 17"

  constructor(){

  }
}
