import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <!-- add output binding and invoke the onSelect() method -->
    <app-donut-wall (selected)="onSelected($event)"></app-donut-wall>
    <!-- add output binding and invoke the onRemove() method -->
    <app-box-of-donuts (remove)="onRemove($event)" [donuts]="donuts" [size]="6"></app-box-of-donuts>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  /** The selected donuts in the box. */
  donuts: Donut[] = [];

  // declare onRemove method that accepts a donut and removes it from the array of selected donuts
  onRemove(donut: Donut) {
    console.log(this.donuts.indexOf(donut));
    this.donuts.splice(this.donuts.indexOf(donut), 1);
  }

  // declare onSelect method that accepts a donut and appends it to the array of selected donuts
  onSelected(donut: Donut) {
    this.donuts.push(donut);
  }

}
