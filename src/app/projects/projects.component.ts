import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Skill } from '../model/skill.model';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule, NavbarComponent, RouterLink],
})
export class ProjectsComponent {
  projects: Project[] = [
    new Project(
      '2dolist',
      'Order Flow - Restaurant Ordering System',
      'A web app for restaurants that streamlines communicating orders and ready for pick up between the servers and cooks.',
      'Full-Stack Developer',
      'Oct 2023 - Feb 2024'
    ),
    new Project(
      'orderflow',
      'Order Flow - Restaurant Ordering System',
      'A web app for restaurants that streamlines communicating orders and ready for pick up between the servers and cooks.',
      'Full-Stack Developer',
      'Oct 2023 - Feb 2024'
    ),
    new Project(
      'cerebro',
      'Cerebro - Cognitive Rehabilitation Games',
      'An Android app designed to rehabilitate traumatic brain injury (TBI) patients through research-backed games.',
      'Java Developer',
      'Aug 2022 - May 2023'
    ),
    new Project(
      'careerpath',
      'Career Path Recommendations Engine',
      'A website that delivers personalized career path suggestions based on user survey data.',
      'Frontend Developer',
      'Aug 2021 - Dec 2021'
    ),
  ];

  constructor() {
    // Order Flow - Restaurant Ordering System Skills
    this.projects[0].addSkill(new Skill('TypeScript', 1));
    this.projects[0].addSkill(new Skill('Angular', 1));
    this.projects[0].addSkill(new Skill('Bootstrap', 1));
    this.projects[0].addSkill(new Skill('HTML', 1));
    this.projects[0].addSkill(new Skill('CSS', 1));
    this.projects[0].addSkill(new Skill('Firebase', 1));
    this.projects[0].addSkill(new Skill('GitHub', 1));
    this.projects[0].addImageUrl('../assets/OrderFlow2.png');
    this.projects[0].addImageUrl('../assets/OrderFlow3.png');
    this.projects[0].addImageUrl('../assets/Orderflow4.png');
    this.projects[0].addImageUrl('../assets/OrderFlow5.png');

    // Cerebro - Cognitive Rehabilitation Games Skills
    this.projects[1].addSkill(new Skill('Java', 1));
    this.projects[1].addSkill(new Skill('Android Studio', 1));
    this.projects[1].addSkill(new Skill('XML', 1));
    this.projects[1].addSkill(new Skill('Firebase', 1));
    this.projects[1].addSkill(new Skill('GitHub', 1));
    this.projects[1].addSkill(new Skill('Scrum', 1));
    this.projects[1].addImageUrl('../assets/Cerebro0.JPG');
    this.projects[1].addImageUrl('../assets/Cerebro-1.JPG');
    this.projects[1].addImageUrl('../assets/Cerebro-2.JPG');
    this.projects[1].addImageUrl('../assets/Cerebro-3.JPG');
    this.projects[1].addImageUrl('../assets/Cerebro-4.JPG');

    // Career Path Recommendations Engine
    this.projects[2].addSkill(new Skill('Angular', 1));
    this.projects[2].addSkill(new Skill('Adobe XD', 1));
    this.projects[2].addSkill(new Skill('Prototyping', 1));
    this.projects[2].addSkill(new Skill('Firebase', 1));
    this.projects[2].addSkill(new Skill('GitHub', 1));
    this.projects[2].addImageUrl('../assets/CP1.JPG');
    this.projects[2].addImageUrl('../assets/CP2.JPG');
    this.projects[2].addImageUrl('../assets/CP3.JPG');
  }
}
