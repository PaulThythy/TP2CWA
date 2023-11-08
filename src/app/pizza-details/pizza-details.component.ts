import { Component,Input } from '@angular/core';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent {
  //lst:Pizza[]=[];         //pour ex 1
  @Input() lst:Pizza[]=[];  //Pour ex 2
  //@Input() pizza:Pizza=new Pizza("","","");

  constructor(){}
}
