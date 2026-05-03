import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.html',
  styleUrls: ['./directives-demo.css']
})
export class DirectivesDemoComponent {

  // ngIf
  showBox = true;

  // ngFor
  students = ["RASIKA", "Rahul", "Sneha", "Amit"];

  // ngSwitch
  color = "red";

  // ngClass / ngStyle
  isActive = true;

  toggleBox() {
    this.showBox = !this.showBox;
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}