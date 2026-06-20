import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
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

  readonly activeImageIndex = signal(0);
  readonly images = computed(() => {
    const selectedProject = this.project();
    if (!selectedProject) {
      return [];
    }

    return selectedProject.images?.length ? selectedProject.images : [selectedProject.image];
  });

  readonly currentImage = computed(() => this.images()[this.activeImageIndex()] ?? '');
  readonly hasMultipleImages = computed(() => this.images().length > 1);

  constructor() {
    effect(() => {
      this.project();
      this.open();
      this.activeImageIndex.set(0);
    });
  }

  close(): void {
    this.closed.emit();
  }

  previousImage(): void {
    const images = this.images();

    if (images.length < 2) {
      return;
    }

    this.activeImageIndex.update((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }

  nextImage(): void {
    const images = this.images();

    if (images.length < 2) {
      return;
    }

    this.activeImageIndex.update((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }

  selectImage(index: number): void {
    this.activeImageIndex.set(index);
  }
}
