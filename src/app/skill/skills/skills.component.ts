import { Component } from '@angular/core';
import { Skill } from '../../model/skill.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  createSkillArray(skills: [string, number][]): Skill[] {
    return skills.map((skill) => new Skill(skill[0], skill[1]));
  }

  // Define skills using the new function
  programmingLanguages = this.createSkillArray([
    ['Java', 3.5],
    ['JavaScript', 3],
    ['TypeScript', 2],
    ['Racket', 2],
    ['C', 2],
    ['Python', 1],
    ['SQL', 1],
    ['Kotlin', 0.5],
  ]);

  webDevelopmentSkills = this.createSkillArray([
    ['HTML', 3.5],
    ['CSS', 3.5],
    ['JavaScript', 3],
    ['Angular', 2],
    ['TypeScript', 2],
    ['Bootstrap', 2],
    ['Firebase', 1.5],
    ['Node.js', 1],
    ['Express.js', 1],
    ['MongoDB', 1],
  ]);

  testingDebuggingSkills = this.createSkillArray([
    ['JUnit4', 2],
    ['debugging', 2],
    ['Jest', 1],
    ['TDD', 1],
    ['test coverage', 1],
  ]);

  toolsTechnologiesSkills = this.createSkillArray([
    ['GitHub', 3.5],
    ['Android Studio', 3],
    ['VS Code', 2.5],
    ['IntelliJ', 2],
    ['Microsoft Teams', 2],
    ['Linux', 1.5],
    ['Figma', 1.5],
    ['Adobe XD', 1.5],
    ['CI/CD', 1],
    ['Jekyll', 1],

    ['Docker', 0.5],
  ]);

  collaborationAgileSkills = this.createSkillArray([
    ['GitHub', 3.5],
    ['documentation', 2.5],
    ['Scrum Agile', 2],
    ['Kanban', 1],
  ]);

  allSkills: { name: string; skills: Skill[] }[] = [
    { name: 'Programming Languages', skills: this.programmingLanguages },
    { name: 'Web Development Skills', skills: this.webDevelopmentSkills },
    { name: 'Testing & Debugging Skills', skills: this.testingDebuggingSkills },
    { name: 'Tools & Technologies', skills: this.toolsTechnologiesSkills },
    {
      name: 'Collaboration & Agile Skills',
      skills: this.collaborationAgileSkills,
    },
  ];
}
