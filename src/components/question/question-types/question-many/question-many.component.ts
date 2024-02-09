import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from 'src/models/test';

@Component({
  selector: 'tq-question-many',
  templateUrl: './question-many.component.html',
  styleUrls: ['./question-many.component.scss']
})
export class QuestionManyComponent {
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  public chosenAnswers: string[];
  public isAnswered: boolean;

  public chooseAnswer(answer: string): void {
    this.chosenAnswers.push(answer);
  }

  public replyQuestion(): void {
    this.isAnswered = true;
    this.reply.emit(this.chosenAnswers);
  }

  public completeQuestion(): void {
    this.next.emit();
  }
}
