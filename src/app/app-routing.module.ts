import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/pages/main-page/main-page.component';
import { PagesModule } from 'src/pages/pages.module';
import { TestPageComponent } from 'src/pages/test-page/test-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'test', component: TestPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
