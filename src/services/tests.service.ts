import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { ITest } from 'src/models/test';
import { Observable } from 'rxjs';
import { IAnswer, IResult } from 'src/models/result';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  constructor(private _rest: RestService) {}

  public currentTest: ITest;
  private _userAnswers: IAnswer[];

  public getAll(): Observable<ITest[]> {
    return this._rest.getAll('tests') as Observable<ITest[]>;
  }

  public getByID(id: string): Observable<ITest> {
    return this._rest.getByID('tests', id) as Observable<ITest>;
  }

  public saveResult(): void {
    const result: IResult = {
      test: this.currentTest,
      answers: this._userAnswers
    }

    this._rest.create('results', result);
  }

  public addAnswer(answer: IAnswer): void {
    this._userAnswers.push(answer);
  }
}
