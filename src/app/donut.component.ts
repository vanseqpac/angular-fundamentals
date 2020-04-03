import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <!-- Use the NgStyle directive to set the font-weight to 'bold' for "chocolate" donuts -->
    <div class="name">
      <span [hidden]="!showName">{{ donut.name }}</span>
      <span
        *ngIf="donut.icing"
        [hidden]="donut.fileName && donut.fileName.length > 0"
        >(icing)</span
      >
    </div>
    <img
      *ngIf="donut.fileName && donut.fileName.length > 0"
      [alt]="donut.name"
      [src]="donut.fileName"
      [style.width.%]="donut.name.length"
    />
  `,
  /**
   * Add styles property and copy styles from the root styles.css
   */
  styles: [`
    :host {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
    }
    
    :host .heading {
      padding: 10px;
    }
  `]
})
export class DonutComponent {
  @Input() donut: Donut;

  @Input() showName: boolean;
}
