import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from 'src/models/test';

@Component({
  selector: 'tq-question-free',
  templateUrl: './question-free.component.html',
  styleUrl: './question-free.component.scss'
})
export class QuestionFreeComponent {
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  public answer: string;
  public isAnswered: boolean;

  public replyQuestion(): void {
    if (this.answer) {
      this.isAnswered = true;
      this.reply.emit([this.answer]);
    }
  }

  public completeQuestion(): void {
    this.next.emit();
  }

  public isCorrectAnswer(): boolean {
    return !!this.question.correctAnswer.includes(this.answer.trim());
  }
}
