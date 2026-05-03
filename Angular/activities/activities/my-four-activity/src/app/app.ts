import { Component, signal } from '@angular/core';
import { ApiDemoComponent } from './api-demo/api-demo';

@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [ApiDemoComponent],  
  templateUrl: './app.html',
  styleUrls: ['./app.css']   
})
export class AppComponent {

  title = signal('my-four-activity');

}