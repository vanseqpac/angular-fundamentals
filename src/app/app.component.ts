import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts size="2"></app-box-of-donuts>
    <!-- Use the NgFor Directive to iterate over the array of numbers.
      Bold the number if it is even. -->

    <h4>Iterating number array</h4>
    <span *ngFor="let num of numArr">
      <p *ngIf="num%2 == 0"><b>{{num}}</b></p>
      <p *ngIf="num%2 != 0">{{num}}</p>
    </span>
  `
})
export class AppComponent {
  // Define an array of numbers
  numArr: Array<number>=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
