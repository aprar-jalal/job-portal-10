import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    CommonModule,
    NavbarComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;
  title = 'job-portal';
}
