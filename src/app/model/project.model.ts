import { Skill } from './skill.model';

export class Project {
  id: string;
  name: string;
  role: string;
  duration: string;
  descriptions: string[];
  skills: Skill[] = [];
  imageUrl: string[] = [];

  constructor(
    id: string,
    projectName: string,
    descs: string[],
    role: string,
    duration: string
  ) {
    this.id = id;
    this.name = projectName;
    this.role = role;
    this.duration = duration;
    this.descriptions = descs;
  }

  addImageUrl(url: string) {
    this.imageUrl.push(url);
  }

  addSkill(skill: Skill) {
    this.skills.push(skill);
  }
}
