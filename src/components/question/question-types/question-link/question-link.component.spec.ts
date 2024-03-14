import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionLinkComponent } from './question-link.component';

describe('QuestionLinkComponent', () => {
  let component: QuestionLinkComponent;
  let fixture: ComponentFixture<QuestionLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionLinkComponent]
    });
    fixture = TestBed.createComponent(QuestionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
