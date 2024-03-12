import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
})
export class SplashComponent {
  name: string = 'Brad Burzon';
  isDeleting: boolean = true;
  started: boolean = true;
  interval: any;

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    this.started = !this.started;
    if (!this.started) {
      this.startAnimation();
    } else {
      this.stopAnimation();
    }
  }

  startAnimation() {
    this.name = '';
    this.animateText();
  }

  stopAnimation() {
    clearInterval(this.interval);
    this.name = 'Brad Burzon'; // Clear the text
  }

  animateText() {
    const fullName = 'Brad Burzon';
    let index = 0;
    const typingSpeed = 200; // Slower typing speed for typing
    const deletingSpeed = 100; // Faster deleting speed for deleting

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
