import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { IQuestion } from 'src/models/test';

@Component({
  selector: 'tq-question-code',
  templateUrl: './question-code.component.html',
  styleUrls: ['./question-code.component.scss']
})
export class QuestionCodeComponent implements OnInit{
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  public code: string;
  public isAnswered: boolean;
  public codeEditorOptions: CodeModel;

  private _codeResult: string;

  public ngOnInit(): void {
    this.code = 'const example = "example"';
    this.codeEditorOptions = {
      language: this.question.language ?? 'javascript',
      uri: 'main.json',
      value: this.code,
    }
  }

  public replyQuestion(): void {
    this.isAnswered = true;
    this.reply.emit([this._codeResult]);
  }

  public completeQuestion(): void {
    this.next.emit();
  }
}
