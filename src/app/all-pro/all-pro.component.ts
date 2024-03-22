import { Component } from '@angular/core';
import data from '../../assets/json/products-list.json';
import { CardComponent } from '../card/card.component';
import { Product } from '../interface/product';
@Component({
  selector: 'app-all-pro',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './all-pro.component.html',
  styleUrl: './all-pro.component.css'
})
export class AllProComponent {
  allproduct: Array<Product> = data;
}
