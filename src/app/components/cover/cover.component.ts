import { Component, inject } from '@angular/core';
import { ThemeManager } from '../../theme-manager.service';
import { AsyncPipe, NgStyle } from '@angular/common';
import { GradientWrapperComponent } from '../gradient-wrapper/gradient-wrapper.component';
import { SwitchModeGitHubComponent } from '../switch-mode/github/switch-mode-github.component';

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
})
export class CoverComponent {
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  darkCover = '/assets/cover-dark.png';
  lightCover = '/assets/cover-light.png';
}
