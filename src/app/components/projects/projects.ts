import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import { Project } from '../../models/project';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../modal/modal';
import { SectionsTitles } from '../sections-titles/sections-titles';

@Component({
  selector: 'app-projects',
  imports: [FaIconComponent, Modal, SectionsTitles],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        'Simulação de banco digital full stack com Node.js/TypeScript e React, focada em arquitetura em camadas, segurança (JWT, bcrypt), validação com Zod e integridade transacional usando PostgreSQL + Prisma.',
      image: 'assets/images/projetos/lirabank-1.png',
      tags: ['React', 'Express'],
    },
    {
      title: 'EcommerceNextJs',
      description:
        'Aplicação de e-commerce desenvolvida com Next.js, React.js e PostgreSQL + Prisma, implementando persistência de carrinho e fluxo completo de compra.',
      image: 'assets/images/projetos/lirashop-1.png',
      images: [
        'assets/images/projetos/lirashop-1.png',
        'assets/images/projetos/lirashop-2.png',
        'assets/images/projetos/lirashop-3.png',
      ],
      tags: ['NextJs', 'Express'],
    },
    {
      title: 'Mini Twitter',
      description:
        'Aplicação inspirada no Twitter com foco em arquitetura de frontend, gerenciamento de estado e integração com API REST.',
      image: 'assets/images/projetos/mini_twitter-1.png',
      images: [
        'assets/images/projetos/mini_twitter-1.png',
        'assets/images/projetos/mini_twitter-2.png',
        'assets/images/projetos/mini_twitter-3.png',
      ],
      tags: ['TypeScript', 'React', 'Zustand', 'Axios'],
    },
    {
      title: 'N8N - Sistema Multiagente',
      description: 'Sistema de gerenciamento de agentes autônomos, desenvolvido com N8N e lovable',
      image: 'assets/images/projetos/capa-sistema_multiagente.png',
      images: ['assets/images/projetos/capa-sistema_multiagente.png'],
      tags: ['N8N', 'lovable'],
    },
    {
      title: 'Bomberman 1984',
      description:
        'Jogo de arcade clássico inspirado no clássico jogo de 1984, recriado com Assembly Mips.',
      image: 'assets/images/projetos/capa-bomberman.png',
      images: ['assets/images/projetos/capa-bomberman.png'],
      tags: ['Assembly', 'Mips Mars'],
    },
    {
      title: 'Suapin',
      description:
        'aplicativo construído em Flutter que consome a API do SUAP (via um backend em Django) para atuar como uma camada de suporte à decisão. O foco do projeto é converter o volume de dados acadêmicos brutos em informações acionáveis, auxiliando o aluno no monitoramento de desempenho e na gestão de riscos de reprovação.',
      image: 'assets/images/projetos/capa-suapin.png',
      images: ['assets/images/projetos/capa-suapin.png'],
      tags: ['Flutter'],
    },
  ]);

  readonly selectedProject = signal<Project | null>(null);
  readonly isModalOpen = computed(() => this.selectedProject() !== null);

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }

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
