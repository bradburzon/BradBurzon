import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
  imports: [NavbarComponent, RouterLink],
})
export class NotfoundComponent {}
