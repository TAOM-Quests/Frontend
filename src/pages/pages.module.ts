import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { QuestionModule } from 'src/components/question/question.module';
//npm i swiper@8.4.7
@NgModule({
  declarations: [
    MainPageComponent,
    TestPageComponent,
    AboutUsPageComponent,
  ],
  imports: [
    CommonModule,
    QuestionModule,
    SwiperModule,
  ],
  exports: [
    MainPageComponent,
    TestPageComponent,
    AboutUsPageComponent,
  ]
})
export class PagesModule {}
