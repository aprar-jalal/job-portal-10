import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'employer' | 'jobseeker';
  status: 'pending' | 'approved' | 'rejected';
  registrationDate: Date;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  filterStatus: string = 'all';

  ngOnInit() {
    // Mock data - replace with actual API call
    this.users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'employer',
        status: 'pending',
        registrationDate: new Date()
      },
      // Add more mock users as needed
    ];
    this.filteredUsers = this.users;
  }

  filterUsers(status: string) {
    this.filterStatus = status;
    this.filteredUsers = status === 'all'
      ? this.users
      : this.users.filter(user => user.status === status);
  }

  approveUser(userId: number) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.status = 'approved';
      // Add API call here
    }
  }

  rejectUser(userId: number) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.status = 'rejected';
      // Add API call here
    }
  }
}
