import { Component } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})

@Injectable()
export class PizzaListComponent {
  pizza_lnk:Pizza=new Pizza("","","");
  lst_pizza:Pizza[]= [new Pizza("Zaza","/assets/images/01.jpeg","Je sais pas")];
  
  ajoutPizza(){
    this.pizza_lnk.setImg(this.pizza_lnk.img); // Ajoute le chemin vers l'image /asset/images/<nom>.jpg
    this.lst_pizza.push(this.pizza_lnk);
    this.pizza_lnk=new Pizza("","","");  
  }
}
