import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionType } from 'src/models/test';

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

  public checkIsCorrectAnswer(questionType: QuestionType, userAnswer: string[], correctAnswer: string[]): boolean {
    switch (questionType) {
      case 'one':
        return this._isCorrectOneAnswerType(userAnswer, correctAnswer);
      case 'many':
        return this._isCorrectManyAnswerType(userAnswer, correctAnswer);
      case "sorting":
        return this._isCorrectSortingAnswerType(userAnswer, correctAnswer);
      case "free":
        return this._isCorrectFreeAnswerType(userAnswer, correctAnswer);
      default:
        return false;
    }
  }

  private _isCorrectOneAnswerType(userAnswer: string[], correctAnswer: string[]): boolean {
    return correctAnswer[0] === userAnswer[0];
  }

  private _isCorrectManyAnswerType(userAnswer: string[], correctAnswer: string[]): boolean {
    let correctAnswerCount = 0;
    userAnswer.forEach(userAnswerItem => {
      if (correctAnswer.includes(userAnswerItem)) {
        correctAnswerCount += 1;
      }
    });

    return correctAnswerCount === correctAnswer.length;
  }

  private _isCorrectSortingAnswerType(userAnswer: string[], correctAnswer: string[]): boolean {
    let correctBoxes = 0;
    const boxesCorrectAnswers: { [key: string]: number } = {};
    userAnswer.forEach(userAnswerItem => {
      const boxName: string = userAnswerItem.split(':')[0];
      boxesCorrectAnswers[boxName] = 0;
    });
    userAnswer.forEach(userAnswerItem => {
      const boxName: string = userAnswerItem.split(':')[0];
      const box: string | undefined = correctAnswer.find(correctAnswerItem => correctAnswerItem.split(':')[0] === boxName);
      if (box) {
        let correctBoxAnswers = 0;
        const boxAnswers: string[] = box.split('@ans=');
        const userBoxAnswers: string[] = userAnswerItem.split('@ans=');
        userBoxAnswers.forEach(userBoxAnswer => {
          if (boxAnswers.includes(userBoxAnswer)) {
            correctBoxAnswers += 1;
          }
        })
        if (correctBoxAnswers === boxAnswers.length) {
          correctBoxes += 1;
        }
      }
    });

    return correctBoxes === correctAnswer.length;
  }

  private _isCorrectFreeAnswerType(userAnswer: string[], correctAnswer: string[]): boolean {
    return correctAnswer.includes(userAnswer[0]);
  }
}
