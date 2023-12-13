import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvvvatarsComponent, Style } from '@ngneat/avvvatars';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AvvvatarsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'avvvatars';
  value = '@ngneat/avvvatars';
  avStyle: Style = 'shape';
}
