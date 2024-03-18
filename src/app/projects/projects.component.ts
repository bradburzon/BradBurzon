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
  projects: Project[] = [];

  constructor() {
    this.initProjects();
  }

  private initProjects(): void {
    const projectDefinitions = [
      {
        id: '2dolist',
        title: '2DoList - Automated To Do List',
        descriptions: [
          'Developing clean code in Java using DRY, KISS, and SOLID principles, resulting in a 20% increase in code maintainability.',
          'Optimizing development workflow using GitHub, Android Studio, and IntelliJ, contributing to a 15% faster project turnaround.',
          'Applying Test Driven Development (TDD) and Adapter design pattern to enhance code scalability and allow for future extensions.',
          'Designing a friendly User Interface (UI) using XML and Material Design for consistent design across Android devices.',
          'Ensuring seamless progression through all phases of the Software Development Life Cycle (SDLC) using a Kanban board.',
        ],
        role: 'Android Developer',
        period: 'Feb 2024 - Present',
        skills: [
          'Java',
          'XML',
          'Android Studio',
          'Gradle',
          'IntelliJ',
          'GitHub',
        ],
        images: ['todolist1.jpg', 'todolist2.jpg', 'todolist3.jpg'],
      },
      {
        id: 'orderflow',
        title: 'Order Flow - Restaurant Ordering System',
        descriptions: [
          'Successfully deployed a scalable, Responsive Web application for a restaurant ordering system, resulting in a 20% efficiency.',
          'Streamlined workflow and deployment by implementing CI/CD pipelines using GitHub Actions, resulting in 99% uptime.',
          'Designed and implemented an active listener architecture with Firebase that processed over 5,000 orders with 95% accuracy.',
          'Developed Front End with Angular, TypeScript, HTML, CSS, and Bootstrap while leveraging Firebase for Back End.',
          'Integrated authentication, hosting, and storage through Firebase, significantly improving user trust and system reliability.',
        ],
        role: 'Full-Stack Developer',
        period: 'Oct 2023 - Feb 2024',
        skills: [
          'TypeScript',
          'Angular',
          'Bootstrap',
          'HTML',
          'CSS',
          'Firebase',
          'GitHub',
        ],
        images: [
          'OrderFlow2.png',
          'OrderFlow3.png',
          'Orderflow4.png',
          'OrderFlow5.png',
        ],
      },
      {
        id: 'cerebro',
        title: 'Cerebro - Cognitive Rehabilitation Games',
        descriptions: [
          'Streamlined project planning with Scrum Agile, cutting development time by 20% through efficient sprint management.',
          'Leveraged GitHub in a 4-person team for 25% more efficient project management and documentation updates.',
          'Conducted Usability Testing with expert matters, improving critical features and boosting user satisfaction by 15%.',
          'Extended Legacy Code to improve UI, add features, and assist in game design using Java, Android Studio, XML, and Firebase.',
          'Integrated Firebase Realtime Database to move the application online, enabling users to access game results from any device.',
        ],
        role: 'Java Developer',
        period: 'Aug 2022 - May 2023',
        skills: [
          'Java',
          'Android Studio',
          'XML',
          'Firebase',
          'GitHub',
          'Scrum',
        ],
        images: [
          'Cerebro0.JPG',
          'Cerebro-1.JPG',
          'Cerebro-2.JPG',
          'Cerebro-3.JPG',
          'Cerebro-4.JPG',
        ],
      },
      {
        id: 'careerpath',
        title: 'Career Path Recommendations Engine',
        descriptions: [
          'Awarded best in prototype and execution amongst 7 other competing teams.',
          'Spearheaded the design for login, survey, and Career Path recommendations user experience using Adobe XD.',
          'Published detailed project documentation including use cases, designs, test plans, tools, and dependencies.',
          'Leveraged GitHub to streamline collaboration processes, ensuring efficient teamwork and project success.',
        ],
        role: 'Frontend Developer',
        period: 'Aug 2021 - Dec 2021',
        skills: ['Angular', 'Adobe XD', 'Prototyping', 'Firebase', 'GitHub'],
        images: ['CP1.JPG', 'CP2.JPG', 'CP3.JPG'],
      },
    ];

    this.projects = projectDefinitions.map((pd) => {
      const project = new Project(
        pd.id,
        pd.title,
        pd.descriptions,
        pd.role,
        pd.period
      );
      pd.skills.forEach((skillName) =>
        project.addSkill(new Skill(skillName, 1))
      );
      pd.images.forEach((image) => project.addImageUrl(`../assets/${image}`));
      return project;
    });
  }
}
