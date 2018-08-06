import { Component, OnInit } from '@angular/core';

import { QuickLunchService } from '../services/quick-lunch.service'; // const qls = new QuickLunchService()
import { Food } from '../models/food.interface';
@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  cards = [
    { title: 'Burgers', cols: 2, rows: 1, id: 'brg' },
    { title: 'Galettes/crêpes', cols: 2, rows: 1, id: 'glt' },
    { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz'}
  ];

  burgers: Food[];
  galettes: Food[];
  pizzas: Food[];

  constructor(private qls: QuickLunchService) {}

  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas();
    this.galettes = this.qls.getGalettes();
  }
}
