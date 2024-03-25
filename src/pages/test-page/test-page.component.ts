import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IResult } from 'src/models/result';
import { ITest } from 'src/models/test';
import { LoadingService } from 'src/services/loading.service';
import { TestsService } from 'src/services/tests.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  constructor(
    private _router: Router,
    private _testsService: TestsService,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService,
    @Inject(DOCUMENT)
    private dom: Document,
  ) {
    this.dom.body.scrollTop = 0;
    this.dom.documentElement.scrollTop = 0;
  }

  public test: ITest;
  public isStarted: boolean;
  public isComplete: boolean;
  public correctAnswersCount: number;
  public currentQuestionIndex: number;
  private _testID: string;

  public ngOnInit(): void {
    this._loadingService.startGlobalLoading();
    this._activatedRoute.queryParams
      .subscribe(params => {
        this._testID = params['id'];
      });
    this._testsService.getByID(this._testID)
      .subscribe(
        (test: ITest) => {
          this.test = test;
          this._loadingService.finishGlobalLoading();
        }
      )
  }

  public onStart(): void {
    this._testsService.startTest(this.test);
    this.currentQuestionIndex = 0;
    this.isStarted = true;
    this.isComplete = false;
  }

  public onNext(): void {
    if (this._isLastQuestion(this.currentQuestionIndex)) {
      this._completeTest()
        .subscribe(
          () => {
            this.isComplete = true;
          }
        )
    } else {
      this.currentQuestionIndex++;
    }
  }

  public navigateToMainPage(): void {
    this._router.navigate(['/']);
  }

  private _isLastQuestion(questionIndex: number): boolean {
    return questionIndex === this.test.questions.length - 1;
  }

  private _completeTest(): Observable<IResult> {
    this.correctAnswersCount = this._testsService.getCorrectAnswersCount();

    return this._testsService.saveResult();
  }
}
