import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  template: ` <div class="row">
    <div class="col-12 main-content">
      <app-skills></app-skills>
    </div>
  </div>`,
  styleUrl: './skill.component.css',
  imports: [SkillsComponent],
})
export class SkillComponent {}
