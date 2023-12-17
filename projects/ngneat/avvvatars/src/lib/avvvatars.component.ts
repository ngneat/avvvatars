import { Component, Input, computed, signal } from '@angular/core';
import { Params, Style } from './types';
import randiman from './utils/random';
import { BACKGROUND_COLORS, TEXT_COLORS, SHAPE_COLORS } from './utils/colors';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { TextComponent } from './components/text/text.component';
import { ShapeComponent } from './components/shape/shape.component';
import { DEFAULTS } from './constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'avvvatars',
  standalone: true,
  imports: [WrapperComponent, TextComponent, ShapeComponent],
  templateUrl: './avvvatars.component.html',
})
export class AvvvatarsComponent implements Params {
  private _displayValue = signal<string | undefined>(undefined);
  @Input() set displayValue(value: string | undefined) {
    this._displayValue.set(value);
  }

  private _value = signal<string>('');
  @Input({ required: true }) set value(value: string) {
    this._value.set(value);
  }

  private _size = signal<number>(DEFAULTS.size);
  @Input() set size(value: number) {
    this._size.set(value);
  }
  public computedSize = computed(() => this._size());

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
  public name = computed(() => {
    return String(this._displayValue() || this._value()).substring(0, 2);
  });

  // generate unique random for given value
  // there is 20 colors in array so generate between 0 and 19
  public key = computed(() => {
    return randiman({ value: this._value(), min: 0, max: 19 });
  });

  // there is 60 shapes so generate between 1 and 60
  public shapeKey = computed(() => {
    return randiman({ value: this._value(), min: 1, max: 60 });
  });

  public shapeSize = computed(() => {
    return Math.round((this._size() / 100) * 50);
  });
}
