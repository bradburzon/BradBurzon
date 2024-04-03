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
        title: '2DoList',
        descriptions: [
          'Improving code maintainability by 30%, significantly simplifying updates and enhancing scalability, through the application of best practices such as DRY, functional state commits, KISS, and SOLID principles.',
          'Accelerating project completion by 15%, enabling faster releases and more efficient feedback integration ,through the optimization of the development workflow, utilizing version control with GitHub and refining processes in Android Studio and IntelliJ.',
          'Developing an Android application for daily task automation, which enhanced user engagement and satisfaction by creating a more intuitive user experience, utilizing Java, Android Studio, XML, Gradle, and Material Design principles.',
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
        title: 'Order Flow',
        descriptions: [
          'Successfully reduced operational costs by deploying a cost-effective ordering web app, leveraging Angular, TypeScript, HTML, CSS, and Bootstrap for the frontend, with Firebase serving as the backend.',
          "Enhanced site reliability and accuracy, achieving 99.999% uptime and a 99.98% accuracy rate in processing orders over the span of 5 months, by implementing CI/CD pipelines with GitHub Actions and leveraging Firebase's active listener architecture.",
          'Streamlined development process that transitioned potential shippable product to a fully realized solution by actively engaging with the restaurant manager across all stages of the Software Development Life Cycle (SDLC).',
          'Boosted order handling efficiency by 30% which enhanced communication between servers and cooks through collaboration with management and staff members of the restaurant for feedback.',
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
        title: 'Cerebro',
        descriptions: [
          'Increased engaging user experience by extending Legacy Code to enhance UI, add features, and assist in game design, utilizing Java, Android Studio, XML, and Firebase.',
          'Boosted project efficiency 20% leading to shorter development time through strategic use of GitHub and Scrum Agile, building collaboration and sprint management in a 4-person team.',
          'Directed efforts in comprehensive usability testing, resulting in a 15% increase in user satisfaction by identifying and refining critical game features based on expert feedback.',
        ],
        role: 'Android Developer',
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
        title: 'Career Path Recommendation',
        descriptions: [
          'Distinguished the project from 7 competitors by leading the user interface design and development of a prototype for a career recommendation engine using Adobe XD, resulting in a superior user interface and user experience.',
          'Implemented a responsive UI using HTML, CSS, Bootstrap in Angular for optimal user experience across various devices, while collaborating closely with 3 team members on comprehensive project documentation and code review submission.',
          'Streamlined project planning with Scrum Agile, cutting development time by 20% through efficient sprint management.',
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
