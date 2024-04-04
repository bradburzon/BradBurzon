import { Component } from '@angular/core';
import { SplashComponent } from './splash/splash.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SplashComponent,
  ],
})
export class HomeComponent {}
