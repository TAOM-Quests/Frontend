import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnswer } from 'src/models/result';
import { IQuestion } from 'src/models/test';
import { TestsService } from 'src/services/tests.service';

@Component({
  selector: 'tq-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _testService: TestsService,
  ) {}

  public onReply(userAnswer: string | string[]) {
    const answer: IAnswer = {
      type: this.question.type,
      answer: userAnswer,
    }

    this._testService.addAnswer(answer);
  }

  public onNext(): void {
    this.next.emit();
  }
}
