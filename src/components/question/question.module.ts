import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { QuestionComponent } from './question.component';
import { QuestionOneComponent } from './question-types/question-one/question-one.component';
import { QuestionManyComponent } from './question-types/question-many/question-many.component';
import { QuestionLinkComponent } from './question-types/question-link/question-link.component';
import { QuestionCodeComponent } from './question-types/question-code/question-code.component';
import { QuestionMistakesComponent } from './question-types/question-mistakes/question-mistakes.component';
import { QuestionSortingComponent } from './question-types/question-sorting/question-sorting.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CodeEditorModule } from '@ngstack/code-editor';



@NgModule({
  declarations: [
    QuestionComponent,
    QuestionOneComponent,
    QuestionManyComponent,
    QuestionCodeComponent,
    QuestionSortingComponent,
    QuestionMistakesComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    BrowserModule,
    QuestionLinkComponent,
    CodeEditorModule.forChild(),
  ],
  exports: [
    QuestionComponent,
  ]
})
export class QuestionModule { }
