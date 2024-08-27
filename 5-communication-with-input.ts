import {Component, Input} from '@angular/core';

// app/app.user.ts

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{ name }}</p>
  `,
  standalone: true,
})
export class UserComponent {
  @Input() name = '';
}



// app/app.route.ts

@Component({
  selector: 'app-root',
  template: `
    <app-user name="Simran" />
  `,
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {}
