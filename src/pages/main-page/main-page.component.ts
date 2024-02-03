import { Component, OnInit } from '@angular/core';
import { ITest } from 'src/models/test';
import { TestsService } from 'src/services/tests.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(
    private _testsService: TestsService
  ) {}

  public tests: ITest[];
  public groups: Set<string>;

  public ngOnInit() {
    this._testsService.getAll()
      .subscribe(
        (tests: ITest[]) => {
          this.tests = tests;
          this.groups = new Set<string>(this.tests.map(test => test.group));
          console.log(this.groups);
        });
  }
}
