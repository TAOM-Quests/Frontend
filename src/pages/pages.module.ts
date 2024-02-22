import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, SwiperModule],
})
export class PagesModule {}
