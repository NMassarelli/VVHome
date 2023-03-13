import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterManagerComponent } from './newsletter-manager.component';

describe('NewsletterManagerComponent', () => {
  let component: NewsletterManagerComponent;
  let fixture: ComponentFixture<NewsletterManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
