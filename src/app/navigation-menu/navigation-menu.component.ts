import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  menuItems: string[] = ['Home', 'Services', 'Contact Us'];
  selectedItem: string = this.menuItems[0];

  selectMenu(item: string): void {
    this.selectedItem = item;
  }
}
