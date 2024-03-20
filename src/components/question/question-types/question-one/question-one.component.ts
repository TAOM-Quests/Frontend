import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from 'src/models/test';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'tq-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent {
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(
    private _questionService: QuestionService,
  ) {}

  public chosenAnswer: string;
  public isAnswered: boolean;

  public getAnswerText(answer: string): string {
    return this._questionService.getAnswerText(answer);
  }

  public getAnswerImages(answer: string): string[] {
    return this._questionService.getAnswerImages(answer);
  }

  public chooseAnswer(answer: string): void {
    if (!this.isAnswered) {
      this.chosenAnswer = answer;
    }
  }

  public replyQuestion(): void {
    this.isAnswered = true;
    this.reply.emit([this.chosenAnswer]);
  }

  public completeQuestion(): void {
    this.next.emit();
  }

  public isSelectedAnswer(answer: string): boolean {
    return answer === this.chosenAnswer;
  }

  public isCorrectAnswer(answer: string): boolean {
    return !!this.question.correctAnswer?.includes(answer);
  }

  public isWrongAnswer(answer: string): boolean {
    return this.isSelectedAnswer(answer) && !this.isCorrectAnswer(answer);
  }
}
