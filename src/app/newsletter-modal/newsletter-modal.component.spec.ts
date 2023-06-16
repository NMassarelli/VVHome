import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterModalComponent } from './newsletter-modal.component';

describe('NewsletterModalComponent', () => {
  let component: NewsletterModalComponent;
  let fixture: ComponentFixture<NewsletterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
