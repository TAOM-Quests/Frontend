import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { QuestionOneComponent } from './question-types/question-one/question-one.component';
import { QuestionManyComponent } from './question-types/question-many/question-many.component';
import { QuestionLinkComponent } from './question-types/question-link/question-link.component';
import { QuestionCodeComponent } from './question-types/question-code/question-code.component';
import { QuestionMistakesComponent } from './question-types/question-mistakes/question-mistakes.component';



@NgModule({
  declarations: [
    QuestionComponent,
    QuestionOneComponent,
    QuestionManyComponent,
    QuestionLinkComponent,
    QuestionCodeComponent,
    QuestionMistakesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionComponent,
  ]
})
export class QuestionModule { }
