import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-modal',
  templateUrl: './newsletter-modal.component.html',
  styleUrls: ['./newsletter-modal.component.css']
})
export class NewsletterModalComponent {
  display: string;

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  save() {
    
  }
}
