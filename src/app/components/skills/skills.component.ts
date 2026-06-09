import { Component } from '@angular/core';

export interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      label: 'Frontend Core',
      color: 'var(--clr-indigo)',
      skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS', 'Responsive Design', 'Accessibility'],
    },
    {
      label: 'Tools & Ecosystem',
      color: 'var(--clr-teal)',
      skills: ['Storybook', 'Angular Material', 'Angular CDK', 'Git / GitHub', 'GitHub Actions', 'Nx', 'Jest', 'Webpack'],
    },
    {
      label: 'Growing Into',
      color: 'var(--clr-purple)',
      skills: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Web Vitals', 'System Design', 'REST APIs'],
    },
  ];
}
