import { Component, HostBinding, Input } from '@angular/core';
import { WrapperProps } from '../../types';

@Component({
  selector: 'lib-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent implements WrapperProps {
  @Input({ required: true }) size!: number;
  @Input({ required: true }) color!: string;
  @Input() shadow: boolean | undefined;
  @Input() border: boolean | undefined;
  @Input() borderSize: number | undefined;
  @Input() borderColor: string | undefined;
  @Input() radius: number | undefined;

  @HostBinding('style.--width') get width() {
    return this.size + 'px';
  }
  @HostBinding('style.--height') get height() {
    return this.size + 'px';
  }
  @HostBinding('style.--border-radius') get borderRadius() {
    return (this.radius || this.size) + 'px';
  }
  @HostBinding('style.--background-color') get backgroundColor() {
    return this.color;
  }
  @HostBinding('style.--border') get borderStyle() {
    return `${this.borderSize}px solid ${this.borderColor}`;
  }
  @HostBinding('style.--box-shadow') get boxShadow() {
    return this.shadow
      ? '0px 3px 8px rgba(18, 18, 18, 0.04), 0px 1px 1px rgba(18, 18, 18, 0.02)'
      : 'none';
  }
}
