import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryManagementComponent } from './story-management.component';

describe('StoryManagementComponent', () => {
  let component: StoryManagementComponent;
  let fixture: ComponentFixture<StoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
