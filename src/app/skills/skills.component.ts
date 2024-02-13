import { Component } from '@angular/core';
import { Skill } from '../model/skill.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = [
    new Skill('Java'),
    new Skill('C'),
    new Skill('Python'),
    new Skill('TypeScript'),
    new Skill('Javascript'),
    new Skill('Angular'),
    new Skill('Bootstrap'),
    new Skill('HTML'),
    new Skill('CSS'),
    new Skill('GitHub'),
    new Skill('Scrum'),
    new Skill('Adobe XD'),
    new Skill('Figma'),
  ];
  softSkills: Skill[] = [
    new Skill('Problem Solving'),
    new Skill('Communication'),
    new Skill('Teamwork'),
    new Skill('Attention to Detail'),
    new Skill('Time Management'),
    new Skill('Leadership'),
  ];

  webDevSkills: Skill[] = [
    new Skill('TypeScript'),
    new Skill('Javascript'),
    new Skill('Angular'),
    new Skill('Bootstrap'),
    new Skill('HTML'),
    new Skill('CSS'),
  ];

  androidDevSkills: Skill[] = [
    new Skill('Java'),
    new Skill('Android Studio'),
    new Skill('XML'),
    new Skill('MVC'),
  ];
}
