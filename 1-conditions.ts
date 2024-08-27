import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    }
  @else {
  <p>Whatever</p>
  }
  `,
  standalone: true,
})
export class AppComponent {
  isLoggedIn = true;
}
