import { Component, input } from '@angular/core';
import { TechItem } from '../../models/techItem';

@Component({
  selector: 'app-stack-card',
  imports: [],
  templateUrl: './stack-card.html',
  styleUrl: './stack-card.css',
})
export class StackCard {
  readonly title = input.required<string>();

  readonly technologies = input.required<TechItem[]>();
}
