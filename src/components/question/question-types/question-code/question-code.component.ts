import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MonacoEditorComponent, MonacoEditorConstructionOptions, MonacoStandaloneCodeEditor } from '@materia-ui/ngx-monaco-editor';
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

  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent;

  public code: string;
  public isAnswered: boolean;
  public codeEditorOptions: MonacoEditorConstructionOptions;

  private _codeResult: string;
  private _modelUri: monaco.Uri;
  private _reactiveGroup: FormGroup;

  public ngOnInit(): void {
    this.code = 'const example = "example"';
    this.codeEditorOptions = {
      theme: 'vs-dark',
      language: 'javascript',
    }

    console.log(this.monacoComponent);
    
  }

  public codeEditorInit(editor: MonacoStandaloneCodeEditor): void {
    editor.setSelection({
      startLineNumber: 1,
      startColumn: 1,
      endColumn: 50,
      endLineNumber: 3
    });
  }

  public replyQuestion(): void {
    this.isAnswered = true;
    this.reply.emit([this._codeResult]);
  }

  public completeQuestion(): void {
    this.next.emit();
  }
}
