import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ImgModalDirective } from 'src/directives/img-modal.directive';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImgModalComponent } from './img-modal/img-modal.component';
import { LoadingComponent } from './loading/loading.component';
import { QuestionComponent } from './question/question.component';
import { QuestionCodeComponent } from './question/question-types/question-code/question-code.component';
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
    ImgModalComponent,
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
    ImgModalDirective,
    QuestionLinkComponent,
    CodeEditorModule.forChild(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    ImgModalComponent,
    QuestionComponent,
  ]
})
export class SharedComponentsModule { }
