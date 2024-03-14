import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AboutUsPageComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ],
})
export class PagesModule {}
