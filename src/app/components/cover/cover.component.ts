import { Component } from '@angular/core';
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
export class CoverComponent {}
