import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/components/shared-components.module';
import { SwiperModule } from 'swiper/angular'; //npm i swiper@8.4.7

import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TestPageComponent } from './test-page/test-page.component';

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
})фв
export class PagesModule {}
фывфывыв