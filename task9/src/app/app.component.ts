import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task9';
  onSearch(searchTerm: string) {
    // Implement your search logic here
    console.log('Search term:', searchTerm);
  }
}
