import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSortingComponent } from './question-sorting.component';

describe('QuestionSortingComponent', () => {
  let component: QuestionSortingComponent;
  let fixture: ComponentFixture<QuestionSortingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionSortingComponent]
    });
    fixture = TestBed.createComponent(QuestionSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
