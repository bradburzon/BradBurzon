import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SplashComponent } from '../splash/splash.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SidebarComponent,
    SplashComponent,
    ProjectsComponent,
    SkillsComponent,
    RouterLink,
    FooterComponent,
    NavbarComponent,
  ],
})
export class HomeComponent {}
