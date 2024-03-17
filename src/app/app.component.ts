import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillComponent } from './skill/skill.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Only import RouterOutlet here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
    HomeComponent,
    NavbarComponent,
    SkillComponent,
    FooterComponent,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'BradBurzon';
}
