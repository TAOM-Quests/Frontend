import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'tq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {}

  public isShowEnterForm: boolean = false;
  public isShowRegisterForm: boolean = false;
  public isShowEnterOrRegisterForm: boolean = false;
  public firstName: string;
  public secondName: string;
  public password: string;

  public navigateOnMain(): void {
    this._router.navigate(['']);
  }

  public navigateOnPage(): void {
    this._router.navigate(['about-us']);
  }

  public showEnterOrRegisterForm(): void {
    if (!this.isShowEnterForm && !this.isShowRegisterForm) {
      this.isShowEnterForm = true;
    }

    this.isShowEnterOrRegisterForm = !this.isShowEnterOrRegisterForm;
  }

  public showEnterForm(): void {
    this.isShowEnterForm = true;
  }

  public showRegisterForm(): void {
    this.isShowRegisterForm = true;
  }

  public enter(): void {
    this._userService.authUser({
      firstName: this.firstName,
      secondName: this.secondName,
      password: this.password,
    })
  }
}
