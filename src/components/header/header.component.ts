import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private _router: Router,
  ) {}

  public navigateOnMain(): void {
    this._router.navigate(['']);
  }

  public navigateOnPage(): void {
    this._router.navigate(['about-us']);
  }
}
