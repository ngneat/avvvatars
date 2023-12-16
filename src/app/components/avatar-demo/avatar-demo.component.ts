import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { AvvvatarsComponent, Style } from '@ngneat/avvvatars';
import '@material/web/textfield/outlined-text-field';
import '@material/web/radio/radio.js';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

@Component({
  selector: 'app-avatar-demo',
  standalone: true,
  imports: [AvvvatarsComponent],
  templateUrl: './avatar-demo.component.html',
  styleUrl: './avatar-demo.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvatarDemoComponent implements AfterViewInit {
  avStyle: Style = 'shape';
  displayValue = '@ngneat/avvvatars';
  value = '';
  int: ReturnType<typeof setInterval> | undefined;
  @ViewChild('input') input!: ElementRef<MdOutlinedTextField>;

  setValue(ev: Event) {
    this.stopInterval();
    this.value = (ev.target as HTMLInputElement).value;
  }

  setStyle(ev: Event) {
    this.stopInterval();
    this.avStyle = (ev.target as HTMLInputElement).value as Style;
  }

  stopInterval() {
    if (this.int) {
      clearInterval(this.int);
      this.int = undefined;
    }
  }

  ngAfterViewInit(): void {
    // TODO: @shhdharmen un-comment below for demo
    // this.int = setInterval(() => {
    //   if (this.value !== this.displayValue) {
    //     this.value = this.displayValue.slice(0, this.value.length + 1);
    //     if (this.value === this.displayValue) {
    //       this.stopInterval();
    //       this.input.nativeElement.focus();
    //     }
    //   }
    // }, 300);
  }
}
