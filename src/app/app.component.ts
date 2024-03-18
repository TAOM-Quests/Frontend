import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImgModalService } from 'src/services/img-modal.service';
import { LoadingService } from 'src/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public imgModalService: ImgModalService,
    private _loadingService: LoadingService,
  ) {}

  public isGlobalLoading: BehaviorSubject<boolean> = this._loadingService.isGLobalLoading;
}
