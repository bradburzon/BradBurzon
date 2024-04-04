import { Component } from '@angular/core';
import { SplashComponent } from './splash/splash.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: '<app-splash></app-splash>',
  styleUrl: './home.component.css',
  imports: [
    SplashComponent,
  ],
})
export class HomeComponent {}
