import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImgModalService } from 'src/services/img-modal.service';
import { LoadingService } from 'src/services/loading.service';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public imgModalService: ImgModalService,
    private _rest: RestService,
    private _loadingService: LoadingService,
  ) { }

  public isGlobalLoading: BehaviorSubject<boolean> = this._loadingService.isGLobalLoading;

  public ngOnInit(): void {
    this._rest.setConfiguration(environment.apiUrl);
  }
}
