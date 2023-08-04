import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/layout/home', pathMatch:'full'
  },
  {
    path:'layout', component:LayoutComponent,
    children:[
      {
        path:'home', component:HomeComponent
      },
      {
        path:'about', component:AboutComponent
      },
      {
        path:'skills', component:SkillsComponent
      },
      {
        path:'resume', component:ResumeComponent
      },
      {
        path:'contact', component:ContactComponent
      },
    ]
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
