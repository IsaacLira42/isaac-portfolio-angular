import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
  readonly project = input<Project | null>(null);
  readonly open = input(false);

  readonly closed = output<void>();

  close(): void {
    this.closed.emit();
  }
}
