import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMistakesComponent } from './question-mistakes.component';

describe('QuestionMistakesComponent', () => {
  let component: QuestionMistakesComponent;
  let fixture: ComponentFixture<QuestionMistakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionMistakesComponent]
    });
    fixture = TestBed.createComponent(QuestionMistakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
