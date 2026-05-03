import { Component } from '@angular/core';
import { DirectivesDemoComponent } from './directives-demo/directives-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DirectivesDemoComponent],   
  templateUrl: './app.html'
})
export class AppComponent {}