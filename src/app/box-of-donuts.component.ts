import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <p>Size: {{ size }}</p>

    <!-- Show "small box" when 4 or less, "large box" when 8 or more, otherwise just "box" -->
    <p *ngIf="size <= 4">Small Box</p>
    <p *ngIf="size >= 8">Large Box</p>
    <p *ngIf="size > 4 && size < 8">Box</p>

    <!-- Show "box full" when the number of donuts equals the size of the box -->
    <!-- Vanessa: === not only checks the value but also type of two variable -->
    <p *ngIf="donuts.length==size">Box Full</p>

    <!-- Show all donuts in the box using NgFor -->
    <app-donut *ngFor="let donut of donuts" [donut]="donut"></app-donut>
  `
})
export class BoxOfDonutsComponent {
  donuts: Donut[] = [
    { name: 'Bacon glazed', icing: true },
    { name: 'Sirachi Infused', icing: false }
  ];

  @Input() size = 6;

}
