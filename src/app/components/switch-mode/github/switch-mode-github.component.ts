import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-mode-github',
  standalone: true,
  templateUrl: './switch-mode-github.component.html',
})
export class SwitchModeGitHubComponent {
  @Input() variant: 'compact' | 'full' = 'compact';

  move = false;

  goTo() {
    window.open('https://github.com/ngneat/avvvatars', '_blank');
  }
}
