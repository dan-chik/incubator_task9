import { Component } from '@angular/core';
import {Product, products} from "../products";
import {MethodsService} from "../methods.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products: Product[] = [...products];
  categories = ['Soup', 'Breakfast', 'Bake', "5-min", "Drink"];
  selectedCategory: string | undefined;
  selectedCategoryProduct: Product | undefined;
  filteredProducts: Product[] = [];

  share(product: Product) {
    window.alert("It is shared!")
    const telegramMessage = `Check out this product: ${product.name} - ${product.description} - ${product.rating} Stars`;
    const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(product.name)}&text=${encodeURIComponent(telegramMessage)}`;

    window.location.href = telegramURL;
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.selectedCategoryProduct = this.products.find(product => product.category === category);
    this.filterProductsByCategory();

    this.selectedCategoryProduct = {
      id: -1,
      name: category,
      time: 0,
      description: 'Category details',
      image: '',
      rating: 0,
      likes: 0,
      category: category,
    };
  }

  onRemoveProduct(product: Product): void {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.filterProductsByCategory();
    }
  }

  private filterProductsByCategory(): void {
    this.filteredProducts = this.selectedCategory
      ? this.products.filter(product => product.category === this.selectedCategory)
      : this.products;
  }

}
