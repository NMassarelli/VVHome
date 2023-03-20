import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NewsletterManagerComponent } from './newsletter-manager/newsletter-manager.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component'; 
import { FormsModule } from "@angular/forms";
import { MaterialManagementComponent } from './material-management/material-management.component';
import { MaterialViewComponent } from './material-view/material-view.component';

@NgModule({
  declarations: [AppComponent, NewsletterManagerComponent, LandingPageComponent, TopNavComponent, MaterialManagementComponent, MaterialViewComponent],
  imports: [BrowserModule,AppRoutingModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
