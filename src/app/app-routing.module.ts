import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from 'src/pages/about-us-page/about-us-page.component';
import { MainPageComponent } from 'src/pages/main-page/main-page.component';
import { PagesModule } from 'src/pages/pages.module';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
];

@NgModule({
  imports: [
    PagesModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
