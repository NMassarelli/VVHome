import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingSelectionViewComponent } from './writing-selection-view.component';

describe('WritingSelectionViewComponent', () => {
  let component: WritingSelectionViewComponent;
  let fixture: ComponentFixture<WritingSelectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingSelectionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingSelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
