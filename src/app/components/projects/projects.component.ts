import { Component } from '@angular/core';

export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  accent: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      number: '01',
      title: 'Angular Design System',
      description:
        'A fully accessible component library built with Angular and Storybook — featuring 30+ components, design tokens, and interactive documentation. Built for scalability, team adoption, and WCAG 2.1 compliance.',
      tags: ['Angular', 'Storybook', 'SCSS', 'Angular CDK', 'TypeScript'],
      github: 'https://github.com/beatriz-nascimento',
      live: '#',
      accent: 'var(--clr-indigo)',
    },
    {
      number: '02',
      title: 'TaskFlow',
      description:
        'Full-stack task management app with real-time updates, drag-and-drop Kanban boards, and user authentication. Built to explore Next.js App Router and full-stack patterns with a REST API backend.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
      github: 'https://github.com/beatriz-nascimento',
      live: '#',
      accent: 'var(--clr-teal)',
    },
    {
      number: '03',
      title: 'Performance Case Study',
      description:
        'A documented optimization of a client-facing page from a Lighthouse score of 42 → 97. Covers Core Web Vitals, image optimization, code splitting, and render-blocking resource elimination.',
      tags: ['Next.js', 'Web Vitals', 'Lighthouse', 'Performance', 'SSR'],
      github: 'https://github.com/beatriz-nascimento',
      live: '#',
      accent: 'var(--clr-purple)',
    },
  ];
}
