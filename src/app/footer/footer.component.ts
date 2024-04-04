import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer-center">© {{ currentYear }} bradburzon.com</footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
