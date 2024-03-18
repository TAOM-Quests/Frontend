import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFreeComponent } from './question-free.component';

describe('QuestionFreeComponent', () => {
  let component: QuestionFreeComponent;
  let fixture: ComponentFixture<QuestionFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionFreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
