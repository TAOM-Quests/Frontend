import { CdkDrag, CdkDragDrop, CdkDragEnter, CdkDragExit, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/models/test';

@Component({
  selector: 'tq-question-sorting',
  templateUrl: './question-sorting.component.html',
  styleUrls: ['./question-sorting.component.scss'],
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDropListGroup, CommonModule],
})
export class QuestionSortingComponent implements OnInit{
  @Input() question:IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  public isAnswered: boolean;
  public boxes: { name: string, data: string[] }[];
  public answers: string[];

  public ngOnInit(): void {
    this._prepareBoxes();
    this._prepareAnswers();
  }

  public moveAnswerToBox(event: CdkDragDrop<string[]>) {
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

  public enableBoxSelectingStyle(event: CdkDragEnter) {
    event.container.element.nativeElement.classList.add('active-box')
  }

  public disableBoxSelectingStyle(event: CdkDragExit) {
    event.container.element.nativeElement.classList.remove('active-box')
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
}
