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
  name: string = 'Brad Burzon';
  isDeleting: boolean = true;
  started: boolean = false;
  interval: any;

  @HostListener('mouseover', ['$event'])
  handleClick(event: MouseEvent) {
    if (!this.started) {
      this.started = true;
      this.startAnimation();
    }
  }

  startAnimation() {
    this.name = '';
    this.animateText();
  }

  animateText() {
    const fullName = 'Brad Burzon';
    let index = 0;
    const typingSpeed = 300;
    const deletingSpeed = 100;

    const type = () => {
      if (!this.isDeleting && index < fullName.length) {
        this.name += fullName[index++];
        if (index === fullName.length) {
          this.isDeleting = true;
          setTimeout(type, 2000); // Wait before start deleting
        } else {
          this.interval = setTimeout(type, typingSpeed);
        }
      } else if (this.isDeleting) {
        if (this.name.length > 0) {
          this.name = this.name.slice(0, -1);
          this.interval = setTimeout(type, deletingSpeed);
        } else {
          this.isDeleting = false;
          index = 0;
          this.startAnimation(); // Restart animation
        }
      }
    };
    type();
  }
}
