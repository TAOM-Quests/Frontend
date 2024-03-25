import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnswer, IResult } from 'src/models/result';
import { ITest } from 'src/models/test';

import { QuestionService } from './question.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  constructor(
    private _rest: RestService,
    private _questionService: QuestionService,
    ) {}

  private _currentTest: ITest;
  private _userAnswers: IAnswer[];

  public getAll(): Observable<ITest[]> {
    return this._rest.getAll('tests') as Observable<ITest[]>;
  }

  public getByID(id: string): Observable<ITest> {
    return this._rest.getByID('tests', id) as Observable<ITest>;
  }

  public startTest(test: ITest): void {
    this._currentTest = test;
    this._userAnswers = [];
  }

  public saveResult(): Observable<IResult> {
    const result: IResult = {
      test: this._currentTest,
      answers: this._userAnswers,
    }

    return this._rest.create('results', result) as Observable<IResult>;
  }

  public addAnswer(answer: IAnswer): void {
    this._userAnswers.push(answer);
  }

  public getCorrectAnswersCount(): number {
    let correctAnswers: number = 0;
    this._currentTest.questions.forEach((question, index) => {
      if (this._questionService.checkIsCorrectAnswer(question.type, this._userAnswers[index].answer, question.correctAnswer)) {
        correctAnswers += 1;
      }
    })

    return correctAnswers;
  }
}
