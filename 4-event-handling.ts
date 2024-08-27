import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>

    <button (click)="greet()">
  `,
  standalone: true,
})

export class AppComponent {
  message = 'jajajajjjajajaja';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  greet() {
        console.log('Hello, there 👋');
    }
}
