import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FontFamilyOptions } from '../Helpers/font-family-options';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsletterModalComponent } from '../newsletter-modal/newsletter-modal.component';
import { StoryManagementComponent } from '../story-management/story-management.component';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent {

  constructor(private modalService: NgbModal) {}

  font: FontFamilyOptions;
  display = 'none';
  email = '';
  setFontFamilyFromDropdown() {
    switch (this.font) {
      case FontFamilyOptions.OpenDyslexic:
        document.getElementById('root').style.fontFamily = 'opendyslexic';
        break;
      case FontFamilyOptions.SFMono:
        document.getElementById('root').style.fontFamily = 'SFMono-Regular';
        break;
    }
  }
 
  launchGetEmail(){
      this.modalService.open({
        templateUrl: './newsletter-modal.component.html',
        controller: NewsletterModalComponent,
        backdrop: 'static',
        size: 'lg'
      });

  }

}
