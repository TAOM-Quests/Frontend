import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SharedComponentsModule } from 'src/components/shared-components.module';
//npm i swiper@8.4.7
@NgModule({
  declarations: [
    MainPageComponent,
    TestPageComponent,
    AboutUsPageComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedComponentsModule,
  ],
  exports: [
    MainPageComponent,
    TestPageComponent,
    AboutUsPageComponent,
  ]
})
export class PagesModule {}
