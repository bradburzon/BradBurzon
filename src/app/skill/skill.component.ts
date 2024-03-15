import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
  imports: [
    SkillsComponent,
    NavbarComponent,
    RouterLink,
    FooterComponent,
  ],
})
export class SkillComponent {}
