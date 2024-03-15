import { Component } from '@angular/core';
import { Skill } from '../../model/skill.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  programmingLanguages: Skill[] = [
    new Skill('Java', 3.5),
    new Skill('JavaScript', 3),
    new Skill('TypeScript', 2),
    new Skill('Racket', 2), // Assuming familiar as 1 year
    new Skill('C', 2),
    new Skill('Python', 1),
    new Skill('SQL', 1),
    new Skill('Kotlin', 0.5),
  ];

  webDevelopmentSkills: Skill[] = [
    new Skill('HTML', 3.5),
    new Skill('CSS', 3.5),
    new Skill('JavaScript', 3),
    new Skill('Angular', 2),
    new Skill('TypeScript', 2),
    new Skill('Bootstrap', 2),
    new Skill('Firebase', 1.5),
    new Skill('Node.js', 1),
    new Skill('Express.js', 1),
    new Skill('MongoDB', 1),
  ];

  testingDebuggingSkills: Skill[] = [
    new Skill('JUnit4', 2),
    new Skill('Jest', 2),
    new Skill('TDD', 2),
    new Skill('test coverage', 2),
    new Skill('debugging', 2),
  ];

  toolsTechnologiesSkills: Skill[] = [
    new Skill('Windows', 3.5),
    new Skill('Git', 3),
    new Skill('Android Studio', 3),
    new Skill('VS Code', 2.5),
    new Skill('IntelliJ', 2),
    new Skill('Linux', 1.5),
    new Skill('CI/CD', 1),
    new Skill('Jekyll', 1),
    new Skill('Docker', 0.5),
  ];

  collaborationAgileSkills: Skill[] = [
    new Skill('GitHub', 3),
    new Skill('documentation', 2.5),
    new Skill('Trello', 2),
    new Skill('Scrum Agile', 2),
    new Skill('Microsoft Teams', 2),
    new Skill('Figma', 1.5),
    new Skill('Adobe XD', 1.5),
    new Skill('Kanban', 1),
  ];

  softSkills: Skill[] = [
    new Skill('Problem Solving', 3),
    new Skill('Communication', 3),
    new Skill('Teamwork', 3),
    new Skill('Attention to Detail', 3),
    new Skill('Time Management', 3),
    new Skill('Leadership', 3),
  ];
}
