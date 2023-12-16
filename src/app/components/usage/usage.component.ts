import { Component } from '@angular/core';
import { CodeComponent } from '../code/code.component';

@Component({
  selector: 'app-usage',
  templateUrl: 'usage.component.html',
  standalone: true,
  imports: [CodeComponent],
})
export class UsageComponent {
  snippet = `
&lt;avvvatars
  value="Best User"
  displayValue="BU"
  style="character"
  [size]="32"
  [shadow]="false"
  [radius]="32"
  [border]="false"
  [borderSize]="2"
  borderColor="#fff"
/>`;
}
