import { Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Brad Burzon - Home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'skills',
    title: 'Brad Burzon - Skills',
    component: SkillComponent,
  },
  {
    path: 'projects',
    title: 'Brad Burzon - Projects',
    children: [{ path: '', component: ProjectsComponent }],
  },
  { path: '**', title: 'Brad Burzon - 404', component: NotfoundComponent },
  { path: '**/', title: 'Brad Burzon - 404', component: NotfoundComponent },
];
