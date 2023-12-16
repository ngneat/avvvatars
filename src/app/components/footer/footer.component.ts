import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import '@material/web/button/outlined-button.js';
import { SwitchModeDarkComponent } from '../switch-mode/dark/switch-mode-dark.component';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SwitchModeDarkComponent],
})
export class FooterComponent {}
