import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/models/test';

@Component({
  selector: 'tq-question-many',
  templateUrl: './question-many.component.html',
  styleUrls: ['./question-many.component.scss']
})
export class QuestionManyComponent implements OnInit {
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  public isAnswered: boolean;
  public chosenAnswers: string[];

  public ngOnInit(): void {
    this.chosenAnswers = [];
  }

  public chooseAnswer(answer: string): void {
    if (this.isSelectedAnswer(answer)) {
      this._unmarkAnswer(answer);
    } else {
      this._markAnswer(answer);
    }
  }

  public replyQuestion(): void {
    this.isAnswered = true;
    this.reply.emit(this.chosenAnswers);
  }

  public completeQuestion(): void {
    this.next.emit();
  }

  public isSelectedAnswer(answer: string): boolean {
    return this.chosenAnswers.includes(answer);
  }

  public isCorrectAnswer(answer: string): boolean {
    return !!this.question.correctAnswer?.includes(answer);
  }

  public isWrongAnswer(answer: string): boolean {
    return this.isSelectedAnswer(answer) && !this.isCorrectAnswer(answer);
  }

  private _markAnswer(answer: string): void {
    this.chosenAnswers.push(answer);
  }

  private _unmarkAnswer(answer: string): void {
    this.chosenAnswers = this.chosenAnswers
      .filter((chosenAnswer: string) => chosenAnswer !== answer);
  }
}
