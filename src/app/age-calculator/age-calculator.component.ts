import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.css'
})
export class AgeCalculatorComponent {
  age: number = 25; 
  ageInMonths: number = this.calculateAgeInMonths(this.age);

  calculateAgeInMonths(age: number): number {
    return age * 12;
  }

  onAgeChange() {
    this.ageInMonths = this.calculateAgeInMonths(this.age);
  }
}
