import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrident.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] =[
    new Ingredient('Potatoes',5),
    new Ingredient('Tomatoes',10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
