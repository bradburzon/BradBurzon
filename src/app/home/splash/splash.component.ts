import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  imports: [],
})
export class SplashComponent implements OnInit {
  ngOnInit(): void {}
  name: string = 'Brad Mike Burzon';
  IsNotDeleting: boolean = true;
  started: boolean = false;
  interval: any;
  showParagraphs: boolean = false; // New property to control visibility

  @HostListener('mouseover', ['$event'])
  handleClick(event: MouseEvent) {
    if (!this.started) {
      this.started = true;
      this.startAnimation();
    }
    this.showParagraphs = true; // Show paragraphs on mouse enter
  }

  startAnimation() {
    this.name = '';
    this.animateText();
  }

  animateText() {
    const fullName = 'Brad Mike Burzon';
    let index = 0;
    const typingSpeed = 500
    const deletingSpeed = 100;

    const type = () => {
      if (!this.IsNotDeleting && index < fullName.length) {
        this.name += fullName[index++];
        if (index === fullName.length) {
          this.IsNotDeleting = true;
          setTimeout(type, 3000); // Wait before start deleting
        } else {
          this.interval = setTimeout(type, typingSpeed);
        }
      } else if (this.IsNotDeleting) {
        if (this.name.length > 0) {
          this.name = this.name.slice(0, -1);
          this.interval = setTimeout(type, deletingSpeed);
        } else {
          this.IsNotDeleting = false;
          index = 0;
          this.startAnimation(); // Restart animation
        }
      }
    };
    type();
  }
}
