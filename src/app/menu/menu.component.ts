import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  errMess: string;
  dishes: Dish[];

  // selectedDish: Dish; // Same as selectedDish: Dish = DISHES[0];

  constructor(private dishService: DishService,
              @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    // this.dishService.getDishes().then((dishes) => this.dishes = dishes);
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any> errmess);
  }
  /*onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }*/

}
