import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
  imports: [
    SkillsComponent,
  ],
})
export class SkillComponent {}