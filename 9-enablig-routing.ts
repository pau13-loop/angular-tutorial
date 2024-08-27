import {Component, ApplicationConfig} from '@angular/core';
import {Routes, RouterOutlet, provideRouter} from '@angular/router';

// app/app.routes.ts

export const routes: Routes = [];



// app/app.component.ts

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}



// app/app.config.ts

// import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};