import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  constructor(private router: Router) {}
handleClick() {
  this.router.navigate(['/notifications-page']);
}

}
