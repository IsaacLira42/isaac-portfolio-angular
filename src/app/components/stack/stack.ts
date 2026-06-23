import { Component } from '@angular/core';
import { TechItem } from '../../models/techItem';
import { StackCard } from '../stack-card/stack-card';
import { SectionsTitles } from '../sections-titles/sections-titles';

@Component({
  selector: 'app-stack',
  imports: [StackCard, SectionsTitles],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {
  backendTechs: TechItem[] = [
    { name: 'Node.js', iconUrl: 'assets/icons/nodejs.png' },
    { name: 'Express', iconUrl: 'assets/icons/icons8-express-js-100.png' },
    { name: 'NestJS', iconUrl: 'assets/icons/nestjs.png' },
    { name: 'Java', iconUrl: 'assets/icons/java.png' },
    { name: 'Spring Boot', iconUrl: 'assets/icons/Spring_Boot.png' },
    { name: 'Python', iconUrl: 'assets/icons/python.png' },
  ];

  frontendTechs: TechItem[] = [
    { name: 'Angular', iconUrl: 'assets/icons/angular.png' },
    { name: 'React', iconUrl: 'assets/icons/React.png' },
    { name: 'Next.js', iconUrl: 'assets/icons/nextjs.png' },
    { name: 'Tailwind CSS', iconUrl: 'assets/icons/TailwindCSS.png' },
    { name: 'shadcn/ui', iconUrl: 'assets/icons/shadcn-ui.png' },
  ];

  dataTechs: TechItem[] = [
    { name: 'PostgreSQL', iconUrl: 'assets/icons/Postgresql.png' },
    { name: 'Prisma ORM', iconUrl: 'assets/icons/prismaORM.png' },
  ];

  devopsFerramentasTechs: TechItem[] = [
    { name: 'Git', iconUrl: 'assets/icons/git.png' },
    { name: 'GitHub', iconUrl: 'assets/icons/GitHub.svg' },
    { name: 'Docker', iconUrl: 'assets/icons/Docker.png' },
    { name: 'Linux', iconUrl: 'assets/icons/tux.png' },
    { name: 'Postman', iconUrl: 'assets/icons/Postman.png' },
    { name: 'n8n', iconUrl: 'assets/icons/N8N.png' },
  ];
}
