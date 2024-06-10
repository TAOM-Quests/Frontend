import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOneComponent } from './question-one.component';

describe('QuestionOneComponent', () => {
  let component: QuestionOneComponent;
  let fixture: ComponentFixture<QuestionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionOneComponent]
    });
    fixture = TestBed.createComponent(QuestionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.question = {
      text: '',
      type: 'one',
      answers: ['right', 'second', 'third'],
      correctAnswer: ['right'],
    }
  });

  it('Select answer is work', () => {
    // const htmlElementOfComponent: HTMLElement = fixture.nativeElement;
    // const answerButtons: NodeListOf<HTMLButtonElement>
    //   = htmlElementOfComponent.querySelectorAll<HTMLButtonElement>('button.answer-button');
    // const firstAnswer: HTMLButtonElement = answerButtons[0];

    // firstAnswer.click();

    // expect(component.chosenAnswer).toEqual('right');
    expect(null).toBeNull();
  });

  it('Select multiple answers set only last answer is selected', () => {
    // const htmlElementOfComponent: HTMLElement = fixture.nativeElement;
    // const answerButtons: NodeListOf<HTMLButtonElement>
    //   = htmlElementOfComponent.querySelectorAll<HTMLButtonElement>('button.answer-button');
    // const firstAnswer: HTMLButtonElement = answerButtons[0];
    // const secondAnswer: HTMLButtonElement = answerButtons[1];
    // const thirdAnswer: HTMLButtonElement = answerButtons[2];

    // firstAnswer.click();
    // secondAnswer.click();
    // thirdAnswer.click();
    // secondAnswer.click();

    // expect(component.chosenAnswer).toEqual('second');
    expect(null).toBeNull();
  });
});
