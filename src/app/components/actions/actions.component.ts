import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import { SwitchModeDarkComponent } from '../switch-mode/dark/switch-mode-dark.component';
import { SwitchModeGitHubComponent } from '../switch-mode/github/switch-mode-github.component';
import { AvvvatarsComponent } from '@ngneat/avvvatars';
import { SwitchModeLiveComponent } from '../switch-mode/live/switch-mode-live.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    SwitchModeDarkComponent,
    SwitchModeGitHubComponent,
    AvvvatarsComponent,
    SwitchModeLiveComponent,
    NgClass,
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActionsComponent {
  @Input() vertical = true;
}
