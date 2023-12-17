import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AsyncPipe, NgStyle } from '@angular/common';
import { GradientWrapperComponent } from '../gradient-wrapper/gradient-wrapper.component';
import { SwitchModeGitHubComponent } from '../switch-mode/github/switch-mode-github.component';
import '@material/web/button/filled-button.js';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [
    NgStyle,
    AsyncPipe,
    GradientWrapperComponent,
    SwitchModeGitHubComponent,
  ],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoverComponent {}
