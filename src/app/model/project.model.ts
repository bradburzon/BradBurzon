import { Skill } from "./skill.model";

export class Project {
  name: string;
  role: string;
  duration: string;
  description: string;
  skills: Skill[] = [];
  imageUrl: string[] = []; // Initialize as an empty array

  constructor(
    projectName: string,
    desc: string,
    role: string,
    duration: string
  ) {
    this.name = projectName;
    this.role = role;
    this.duration = duration;
    this.description = desc;
  }

  // Method to add an image URL to the array
  addImageUrl(url: string) {
    this.imageUrl.push(url);
  }

  addSkill(skill: Skill){
    this.skills.push(skill);
  }
}
