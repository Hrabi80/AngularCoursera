import { Injectable } from '@angular/core';
import { Dish } from '../model/Dish';
import { DISHES } from '../model/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
