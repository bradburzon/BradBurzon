export class Skill {
  name: string | undefined;
  yearsOfExperience: number;

  constructor(public skillName: string, years: number) {
    this.name = skillName;
    this.yearsOfExperience = years;
  }
}
