import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { BoxStylingComponent } from './box-styling/box-styling.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationMenuComponent,BoxStylingComponent,AgeCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssessment';
}
