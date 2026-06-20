import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Project } from '../../models/project';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  imports: [FaIconComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;

  // Captura a referência do container de scroll
  private carouselContainer = viewChild<ElementRef<HTMLDivElement>>('carousel');

  // Mocks
  public projects = signal<Project[]>([
    {
      title: 'LiraBank',
      description:
        'Simulação de banco digital desenvolvida para demonstrar o domínio de uma stack moderna...',
      image: 'assets/lirabank.png',
      tags: ['React', 'Express'],
    },
    {
      title: 'EcommerceNextJs',
      description:
        'Plataforma e-commerce com Next.js e PostgreSQL. Funcionalidades: listagem de produtos...',
      image: 'assets/lirashop.png',
      tags: ['NextJs', 'Express'],
    },
  ]);

  scroll(direction: 'left' | 'right') {
    const container = this.carouselContainer()?.nativeElement;
    if (!container) return;

    // Define a quantidade de scroll com base na largura de um card + gap
    const scrollAmount = 450;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
