import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { IQuestion } from 'src/models/test';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'tq-question-code',
  templateUrl: './question-code.component.html',
  styleUrls: ['./question-code.component.scss']
})
export class QuestionCodeComponent implements OnInit{
  @Input() question: IQuestion;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() reply: EventEmitter<string[]> = new EventEmitter<string[]>();

  public isAnswered: boolean;
  public codeResult: string;
  public codeEditorOptions: CodeModel;

  public constructor (
    private _questionService: QuestionService,
  ) {}

  public ngOnInit(): void {
    this.codeEditorOptions = {
      language: this.question.language ?? 'javascript',
      uri: 'main.json',
      value: 'return 2+3;',
    }
  }

  public replyQuestion(): void {
    this._compileCode();
    this.isAnswered = true;
    this.reply.emit([this.codeResult]);
  }

  public completeQuestion(): void {
    this.next.emit();
  }

  private _compileCode(): void {
    this._questionService.compileCode(this.question.language ?? 'javascript',this.codeEditorOptions.value)
      .subscribe((codeResult: string) => {
        this.codeResult = codeResult

        console.log('codeResult', codeResult);
        
      })
  }
}
