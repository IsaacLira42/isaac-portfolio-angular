import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-sections-titles',
  imports: [],
  templateUrl: './sections-titles.html',
  styleUrl: './sections-titles.css',
})
export class SectionsTitles {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
