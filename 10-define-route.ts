import {Routes} from '@angular/router';
import {Component} from '@angular/core';

// import {HomeComponent} from './home/home.component';
// import {UserComponent} from './user/user.component';



// app/home/home.component.ts

@Component({
  selector: 'app-home',
  template: `
    <div>Home Page</div>
  `,
  standalone: true,
})
export class HomeComponent {}



// app/home/user.component.ts

@Component({
  selector: 'app-user',
  template: `
    <div>User Page</div>
  `,
  standalone: true,
})
export class UserComponent {}



// app/app.routes.ts

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserComponent,
  },
];