import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IDepartment } from 'src/models/department';
import { IGroup } from 'src/models/group';
import { ITest } from 'src/models/test';
import { LoadingService } from 'src/services/loading.service';
import { TestsService } from 'src/services/tests.service';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {
  constructor(
    private _router: Router,
    private _testsService: TestsService,
    private _loadingService: LoadingService,
  ) {}

  public tests: ITest[];
  public popularTests: ITest[];
  public currentDepartment: IDepartment;
  public groups: { name: string, tests: ITest[] }[];

  public ngOnInit() {
    this.groups = [];
    this._loadingService.startGlobalLoading();
    const departmentGroups: Subject<IGroup[]> = new Subject<IGroup[]>();
    const departments: Subject<IDepartment[]> = new Subject<IDepartment[]>();

    this._testsService.getDepartment('Прикладная информатика')
      .subscribe((department: IDepartment[]) => {
        this.currentDepartment = department[0];
        departments.next(department);
      })

    departments.subscribe(loadedDepartments => {
      this._testsService.getGroupsByDepartment(loadedDepartments[0].name)
        .subscribe(
          (testGroups: IGroup[]) => {
            departmentGroups.next(testGroups);
          }
        )
    })

    departmentGroups.subscribe(loadedGroups => {
      loadedGroups.forEach((group: IGroup) => {
        this._testsService.getByGroup(group.name)
          .subscribe((tests: ITest[]) => {
            this.groups.push({ name: group.name, tests });
            if (!this.popularTests) {
              this.popularTests = tests.slice(0, 3);
            }
            this._loadingService.finishGlobalLoading();
          })
      })
    });
  }

  public navigateOnTest(test: ITest): void {
    this._router.navigate(['test'], { queryParams: { id: test._id } });
  }
}
