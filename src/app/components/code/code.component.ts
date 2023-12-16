import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { CodeHighlightService } from '../../code-highlight.service';
import { NgClass } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  standalone: true,
  imports: [NgClass],
})
export class CodeComponent implements OnChanges {
  @Input() language = 'typescript';
  @Input() containerClass = '';
  @Input({ required: true }) snippet: string | SafeHtml = '';

  @ViewChild('code') codeTemplateRef: ElementRef<HTMLElement> | undefined;

  private codeHighlightService = inject(CodeHighlightService);

  ngOnChanges(): void {
    console.log('snippet', this.snippet);
    setTimeout(() => {
      if (this.codeTemplateRef && this.codeTemplateRef.nativeElement) {
        this.codeHighlightService.highlightElement(
          this.codeTemplateRef.nativeElement,
        );
      }
    });
  }
}
