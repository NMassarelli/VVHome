import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialManagementComponent } from './material-management/material-management.component';

const appRoutes: Routes = [
  {path :'mmList', component: MaterialManagementComponent,title:'Happy Reading!'},
  { path: 'home', component: LandingPageComponent, title:'Home' },
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
