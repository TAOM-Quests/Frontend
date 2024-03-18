import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(
    private _rest: RestService,
  ) { }

  public getAnswerText(answer: string): string {
    return answer.split('@img=')[0];
  }

  public getAnswerImages(answer: string): string[] {
    return answer.split('@img=').slice(1);
  }

  public compileCode(language: string, code: string): Observable<string> {
    return this._rest.compileCode(language, code);
  }
}
