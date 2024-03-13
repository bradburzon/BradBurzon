import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [SkillsComponent, NavbarComponent, RouterLink],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {}
