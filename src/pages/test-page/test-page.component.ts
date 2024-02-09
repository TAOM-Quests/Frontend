import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITest } from 'src/models/test';
import { TestsService } from 'src/services/tests.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  constructor(
    private _testsService: TestsService,
    private _activatedRoute: ActivatedRoute,
  ) {}

  public test: ITest;
  private _testID: string;

  public ngOnInit(): void {
    this._activatedRoute.queryParams
      .subscribe(params => {
        this._testID = params['id'];
      });
    this._testsService.getByID(this._testID)
      .subscribe(
        (test: ITest) => {
          this.test = test;
        }
      )
  }
}
