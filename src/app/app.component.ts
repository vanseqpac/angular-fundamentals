import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts [size]="8"></app-box-of-donuts>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {}
