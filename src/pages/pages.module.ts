import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { QuestionModule } from 'src/components/question/question.module';

@NgModule({
  declarations: [MainPageComponent, TestPageComponent],
  imports: [CommonModule, QuestionModule],
})
export class PagesModule {}
