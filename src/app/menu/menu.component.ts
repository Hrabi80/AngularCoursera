import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/Dish';
import { DISHES } from '../model/dishes';
import { DishService } from '../_services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  dishes: Dish[] ;

  selectedDish: Dish;
  
 

  constructor(private _service: DishService) { }

  ngOnInit(): void {
    this._service.getDishes()
      .then(dishes => this.dishes = dishes);
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
