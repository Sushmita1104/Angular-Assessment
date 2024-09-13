import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-styling',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './box-styling.component.html',
  styleUrl: './box-styling.component.css'
})
export class BoxStylingComponent {
  boxWidth: number = 150;  // Default width in pixels
  boxHeight: number = 150; // Default height in pixels
  boxColor: string = '#007bff'; // Default background color

  // Method to return the styles for the box
  getBoxStyles() {
    return {
      'width.px': this.boxWidth,
      'height.px': this.boxHeight,
      'background-color': this.boxColor
    };
  }

}
