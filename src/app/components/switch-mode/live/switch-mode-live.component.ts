import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-mode-live',
  standalone: true,
  templateUrl: './switch-mode-live.component.html',
})
export class SwitchModeLiveComponent {
  @Input() variant: 'compact' | 'full' = 'compact';

  move = false;

  goTo() {
    window.open('https://github.com/ngneat/avvvatars', '_blank');
  }
}
