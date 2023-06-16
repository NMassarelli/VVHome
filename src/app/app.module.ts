import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component'; 
import { FormsModule } from "@angular/forms";
import { NewsletterModalComponent } from './newsletter-modal/newsletter-modal.component';
import { StoryManagementComponent } from './story-management/story-management.component';

@NgModule({
  declarations: [AppComponent, StoryManagementComponent, LandingPageComponent, TopNavComponent],
  imports: [BrowserModule,AppRoutingModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
