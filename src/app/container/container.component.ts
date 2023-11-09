import { Component } from '@angular/core';

import { Pizza } from '../shared/pizza';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  pizzas:Pizza[]= [new Pizza("Zaza","/assets/images/01.jpeg","Je sais pas")];

  selectedPizza:Pizza=new Pizza("","","");

  ajoutPizza(){
    this.pizzas.push(this.selectedPizza);
    this.selectedPizza = new Pizza("", "", "");
  }

  recupPizza(index: number) {
    this.selectedPizza = this.pizzas[index];
  }
}
