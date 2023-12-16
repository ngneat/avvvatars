import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeManager } from './theme-manager.service';
import { CoverComponent } from './components/cover/cover.component';
import { AvatarDemoComponent } from './components/avatar-demo/avatar-demo.component';
import { ActionsComponent } from './components/actions/actions.component';
import { InstallationComponent } from './components/installation/installation.component';
import { SetupComponent } from './components/setup/setup.component';
import { UsageComponent } from './components/usage/usage.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CoverComponent,
    AvatarDemoComponent,
    ActionsComponent,
    InstallationComponent,
    SetupComponent,
    UsageComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;
}
