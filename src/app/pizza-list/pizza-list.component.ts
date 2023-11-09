import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { Pizza } from '../pizza'; ex1
import { Pizza } from '../shared/pizza';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})

@Injectable()
export class PizzaListComponent {
  @Input() pizzas: Pizza[] = [];
  @Output() pizzaClicked: EventEmitter<number>= new EventEmitter<number>();

  //ex1
  /*ajoutPizza(){
    this.pizza_lnk.setImg(this.pizza_lnk.img); // Ajoute le chemin vers l'image /asset/images/<nom>.jpg
    this.lst_pizza.push(this.pizza_lnk);
    this.pizza_lnk=new Pizza("","",""); 
  }*/

  recupPizza(index: number){
    this.pizzaClicked.emit(index);
  }
}
