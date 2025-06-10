import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="admin-layout">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="logo">
          <h2>Admin Dashboard</h2>
        </div>

        <nav class="nav-menu">
          <a
            routerLink="/usermanagment"
            routerLinkActive="active">
            <i class="fas fa-users"></i>
            User Management
          </a>
          <a
            routerLink="/joblist"
            routerLinkActive="active">
            <i class="fas fa-briefcase"></i>
            Job Listings
          </a>
        </nav>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .admin-layout {
      display: flex;
      min-height: calc(100vh - 60px);
      background: #f5f6fa;
    }

    .sidebar {
      width: 250px;
      background: #2c3e50;
      color: white;
      padding: 20px;
      height: calc(100vh - 60px);
      position: fixed;
      left: 0;
      overflow-y: auto;
    }

    .logo {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }

    .logo h2 {
      font-size: 1.5rem;
      margin: 0;
      color: white;
    }

    .nav-menu {
      margin-top: 30px;
    }

    .nav-menu a {
      display: flex;
      align-items: center;
      padding: 15px;
      color: white;
      text-decoration: none;
      transition: all 0.3s;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .nav-menu a i {
      margin-right: 10px;
      font-size: 1.2rem;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
      background: #34495e;
    }

    .main-content {
      flex: 1;
      margin-left: 250px;
      padding: 20px;
      background: #f5f6fa;
    }

    @media (max-width: 768px) {
      .sidebar {
        width: 200px;
      }
      
      .main-content {
        margin-left: 200px;
      }
    }

    @media (max-width: 576px) {
      .sidebar {
        display: none;
      }
      
      .main-content {
        margin-left: 0;
      }
    }
  `]
})
export class AdminLayoutComponent {} 