import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionManyComponent } from './question-many.component';

describe('QuestionManyComponent', () => {
  let component: QuestionManyComponent;
  let fixture: ComponentFixture<QuestionManyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionManyComponent]
    });
    fixture = TestBed.createComponent(QuestionManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
