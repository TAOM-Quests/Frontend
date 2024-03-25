import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/models/test';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'tq-question-sorting',
  templateUrl: './question-sorting.component.html',
  styleUrls: ['./question-sorting.component.scss'],
})
export class QuestionSortingComponent implements OnInit {
  @Input() maxCount: number;
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(
    private _questionService: QuestionService,
  ) {}

  public isAnswered: boolean;
  public boxes: { name: string, data: string[] }[];
  public answers: string[];
  private _rightFormedAnswer: string[];

  public ngOnInit(): void {
    this._prepareBoxes();
    this._prepareAnswers();
  }

  public getAnswerText(answer: string): string {
    return this._questionService.getAnswerText(answer);
  }

  public getAnswerImages(answer: string): string[] {
    return this._questionService.getAnswerImages(answer);
  }

  public moveAnswerToBox(event: CdkDragDrop<string[]>) {
    if (event.container.data.length < this.maxCount) {
      event.container.element.nativeElement.classList.remove('active-box');

      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        )
      }
    }
    if (event.previousContainer.data.length === 1 && event.container.data.length === 1 && this.maxCount === 1) {
      event.container.element.nativeElement.classList.remove('active-box');

      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          0,
          1,
        );
        transferArrayItem(
          event.container.data,
          event.previousContainer.data,
          0,
          0,
        );
      }
    }
  }

  public enableBoxSelectingStyle(event: CdkDragEnter) {
    event.container.element.nativeElement.classList.add('active-box')
  }

  public disableBoxSelectingStyle(event: CdkDragExit) {
    event.container.element.nativeElement.classList.remove('active-box')
  }

  public replyQuestion(): void {
    if (this.answers.length === 0) {
      this.isAnswered = true;
      this._prepareRightFormedAnswer();
      this.reply.emit(this._rightFormedAnswer);
    }
  }

  public completeQuestion(): void {
    this.next.emit();
  }

  public isCorrectAnswer(boxName: string, answer: string): boolean {
    const boxAnswers: string[] | undefined = this.question.correctAnswer
      ?.find(correctBox => correctBox.split(':')[0] === boxName)
      ?.split(':')[1]
      .split('@ans=');

    return boxAnswers?.includes(answer) ?? false;
  }

  private _prepareBoxes(): void {
    this.boxes = [];
    this.question.answers
      .filter(answer => answer.split(':')[0] === 'box')
      .map(boxName => {
        this.boxes.push({
          name: boxName.split(':')[1],
          data: [],
        })
      });
  }

  private _prepareAnswers(): void {
    this.answers = this.question.answers
      .filter(answer => answer.split(':')[0] === 'answer')
      .map(answer => answer.split(':')[1]);
  }

  private _prepareRightFormedAnswer(): void {
    this._rightFormedAnswer = [];

    this.boxes
      .map(box => {
        const boxName: string = box.name;
        const boxData: string[] = box.data;
        let formedAnswer = `${boxName}:`;

        boxData.map(answer => {
          formedAnswer += `@ans=${answer}`;
        })

        this._rightFormedAnswer.push(formedAnswer);
      })
  }
}
