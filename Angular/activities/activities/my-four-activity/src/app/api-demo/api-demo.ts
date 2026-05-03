import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user';

@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-demo.html',
  styleUrls: ['./api-demo.css']
})
export class ApiDemoComponent {

  users: any[] = [];
  loading = true;

  constructor(private userService: UserService) {}
  ngOnInit() {
    console.log("Component Loaded");  

    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log("API Data:", data);   
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("API Error:", err);
        this.loading = false;
      }
    });
  }
}