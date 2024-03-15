import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isSubLoading: BehaviorSubject<{ [key: string]: boolean }> = new BehaviorSubject<{ [key: string]: boolean }>({});
  public isGLobalLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _subLoadings: { [key: string]: boolean };

  public startGlobalLoading(): void {
    this.isGLobalLoading.next(true);
  }

  public finishGlobalLoading(): void {
    this.isGLobalLoading.next(false);
  }

  public startSubLoading(loadingName: string): void {
    this._subLoadings[loadingName] = true;
    this.isSubLoading.next(this._subLoadings);
  }

  public finishSubLoading(loadingName: string): void {
    delete this._subLoadings[loadingName]
    this.isSubLoading.next(this._subLoadings);
  }
}
