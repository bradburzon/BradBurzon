import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SplashComponent } from '../splash/splash.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    SplashComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
