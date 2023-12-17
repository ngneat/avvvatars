import { Component } from '@angular/core';
import { CodeComponent } from '../code/code.component';

@Component({
  selector: 'app-setup',
  templateUrl: 'setup.component.html',
  standalone: true,
  imports: [CodeComponent],
})
export class SetupComponent {
  snippet = `import { AvvvatarsComponent } from '@ngneat/avvvatars';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvvvatarsComponent],
  templateUrl: 'app.component.html'
})
export class AppComponent {}
  `;
}
