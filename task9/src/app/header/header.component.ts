import { Component, Output, EventEmitter } from '@angular/core';
import {products, Product} from "../products";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  searchText: string = '';
  // products: string[] = [];
  products: Product[] = [];
  productNames: string[] = products.map(product => product.name);

  performSearch() {
    // You can add additional search functionality here if needed
    console.log('Performing search for:', this.searchText);
  }

  // searchTerm: string = '';
  // @Output() searchEvent = new EventEmitter<string>();
  //
  // onSearch() {
  //   this.searchEvent.emit(this.searchTerm);
  // }

  // protected readonly products = products;
}
