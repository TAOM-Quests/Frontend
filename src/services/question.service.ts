import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(
    private _rest: RestService,
  ) { }

  public compileCode(language: string, code: string): Observable<string> {
    return this._rest.compileCode(language, code);
  }
}
