import { Skill } from './skill.model';

export class Project {
  id: string;
  name: string;
  role: string;
  duration: string;
  description: string;
  skills: Skill[] = [];
  imageUrl: string[] = []; // Initialize as an empty array

  constructor(
    id: string,
    projectName: string,
    desc: string,
    role: string,
    duration: string
  ) {
    this.id = id;
    this.name = projectName;
    this.role = role;
    this.duration = duration;
    this.description = desc;
  }

  // Method to add an image URL to the array
  addImageUrl(url: string) {
    this.imageUrl.push(url);
  }

  addSkill(skill: Skill) {
    this.skills.push(skill);
  }
}
