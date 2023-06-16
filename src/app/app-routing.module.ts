import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StoryManagementComponent } from './story-management/story-management.component';

const appRoutes: Routes = [
  { path: 'home', component: LandingPageComponent, title:'Home' },
  { path: 'work', component: StoryManagementComponent, title:'Works'},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
