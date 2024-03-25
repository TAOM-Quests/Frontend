import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCodeComponent } from './question-code.component';

describe('QuestionCodeComponent', () => {
  let component: QuestionCodeComponent;
  let fixture: ComponentFixture<QuestionCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCodeComponent]
    });
    fixture = TestBed.createComponent(QuestionCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
