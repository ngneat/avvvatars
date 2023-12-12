import { Component, HostBinding, Input } from '@angular/core';
import * as shapes from './all-shapes';
import { inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export type ShapeNames = keyof typeof shapes;
interface ShapeList {
  [key: string]: string;
}
export interface ShapeProps {
  name: ShapeNames;
  size?: number;
  color?: string;
}

@Component({
  selector: 'lib-shape',
  standalone: true,
  imports: [],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css',
})
export class ShapeComponent implements ShapeProps {
  @Input({ required: true }) name!: ShapeNames;
  @Input() size = 24;

  @HostBinding('style.--color')
  @Input()
  color?: string;

  private sanitizer = inject(DomSanitizer);

  get shapeSVG() {
    const svg = (shapes as ShapeList)[this.name];
    if (!svg) {
      return null;
    }
    console.log(
      this.sanitizer.bypassSecurityTrustHtml(
        svg.replace('{props}', `width="${this.size}"`)
      )
    );
    return this.sanitizer.bypassSecurityTrustHtml(
      svg.replace('{props}', `width="${this.size}"`)
    );
  }
}
