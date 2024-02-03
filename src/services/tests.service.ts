import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { ITest } from 'src/models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  constructor(private _rest: RestService) {}

  public getAll(): Observable<ITest[]> {
    return this._rest.getAll('tests') as Observable<ITest[]>;
  }
}
