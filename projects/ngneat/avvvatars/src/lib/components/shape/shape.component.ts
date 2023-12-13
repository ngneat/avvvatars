import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  afterNextRender,
  computed,
  effect,
  signal,
} from '@angular/core';
import { inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface ShapeProps {
  name: string | undefined;
  size?: number;
  color?: string;
}

@Component({
  selector: 'lib-shape',
  standalone: true,
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css',
  host: {
    role: 'img',
  },
})
export class ShapeComponent implements ShapeProps {
  private _name = signal<string | undefined>(undefined);
  @Input({ required: true }) set name(value: string | undefined) {
    this._name.set(value);
  }

  private _size = signal(24);
  @Input() set size(value: number) {
    this._size.set(value);
  }

  @HostBinding('style.--ngneat-avvvatars-color')
  @Input()
  color?: string;

  private sanitizer = inject(DomSanitizer);
  private renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);
  private _allShapes: Record<string, string> = {};
  private _renderSvg = signal(false);

  constructor() {
    afterNextRender(() => {
      import('./all-shapes').then((s) => {
        this._allShapes = s;
        this._renderSvg.set(true);
      });
    });
    effect(() => {
      if (this._renderSvg()) {
        const svgKey = this._name();
        if (svgKey !== undefined) {
          import('./all-shapes');
          const svg = this._allShapes[svgKey];
          if (svg) {
            const svgHtml = this.sanitizer.bypassSecurityTrustHtml(
              svg.replace('{props}', `width="${this._size()}"`)
            );
            this.renderer.setProperty(
              this._elementRef.nativeElement,
              'innerHTML',
              svg.replace('{props}', `width="${this._size()}"`)
            );
          }
        }
      }
    });
  }
}
