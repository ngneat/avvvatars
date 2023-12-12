import { Component, Input } from '@angular/core';
import { Params, Style } from './types';
import randiman from './utils/random';
import { BACKGROUND_COLORS, TEXT_COLORS, SHAPE_COLORS } from './utils/colors';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { TextComponent } from './components/text/text.component';
import { ShapeComponent } from './components/shape/shape.component';
import { DEFAULTS } from './constants';

@Component({
  selector: 'lib-avvvatars',
  standalone: true,
  imports: [WrapperComponent, TextComponent, ShapeComponent],
  templateUrl: './avvvatars.component.html',
  styles: ``,
})
export class AvvvatarsComponent implements Params {
  @Input() displayValue?: string | undefined;
  @Input({ required: true }) value!: string;
  @Input() size: number = DEFAULTS.size;
  @Input() shadow: boolean = DEFAULTS.shadow;
  @Input() style: Style = DEFAULTS.style as Style;
  @Input() border: boolean = DEFAULTS.border;
  @Input() borderSize: number = DEFAULTS.borderSize;
  @Input() borderColor: string = DEFAULTS.borderColor;
  @Input() radius?: number | undefined;

  readonly BACKGROUND_COLORS = BACKGROUND_COLORS;
  readonly TEXT_COLORS = TEXT_COLORS;
  readonly SHAPE_COLORS = SHAPE_COLORS;

  // get first two letters
  get name() {
    return String(this.displayValue || this.value).substring(0, 2);
  }

  // generate unique random for given value
  // there is 20 colors in array so generate between 0 and 19
  get key() {
    return randiman({ value: this.value, min: 0, max: 19 });
  }

  // there is 60 shapes so generate between 1 and 60
  get shapeKey() {
    return randiman({ value: this.value, min: 1, max: 60 });
  }

  get shapeSize() {
    return Math.round((this.size / 100) * 50);
  }
}
