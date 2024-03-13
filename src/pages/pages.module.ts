import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [MainPageComponent, AboutUsPageComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, SwiperModule],
})
export class PagesModule {}
