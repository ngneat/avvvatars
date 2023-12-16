import { Component, Input, inject } from '@angular/core';
import { ThemeManager } from '../../../theme-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-switch-mode-dark',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './switch-mode-dark.component.html',
})
export class SwitchModeDarkComponent {
  @Input() variant: 'compact' | 'full' = 'compact';
  private themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme);
  }
}
