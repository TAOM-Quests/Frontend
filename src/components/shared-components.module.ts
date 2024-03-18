import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CodeEditorModule } from '@ngstack/code-editor';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { QuestionComponent } from './question/question.component';
import { QuestionCodeComponent } from './question/question-types/question-code/question-code.component';
import { QuestionFreeComponent } from './question/question-types/question-free/question-free.component';
import { QuestionLinkComponent } from './question/question-types/question-link/question-link.component';
import { QuestionManyComponent } from './question/question-types/question-many/question-many.component';
import { QuestionMistakesComponent } from './question/question-types/question-mistakes/question-mistakes.component';
import { QuestionOneComponent } from './question/question-types/question-one/question-one.component';
import { QuestionSortingComponent } from './question/question-types/question-sorting/question-sorting.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    QuestionComponent,
    QuestionOneComponent,
    QuestionManyComponent,
    QuestionCodeComponent,
    QuestionSortingComponent,
    QuestionMistakesComponent,
    QuestionFreeComponent,
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
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    QuestionComponent,
  ]
})
export class SharedComponentsModule { }
