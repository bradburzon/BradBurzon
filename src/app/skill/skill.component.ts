import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [SkillsComponent, NavbarComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {}
