import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { IUser } from 'src/models/user';
import { Observable } from 'rxjs';
import { ISearch } from 'src/models/search-params';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(
    private _rest: RestService,
  ) { }

  public isAuth: boolean

  public authUser(userData: IUser): void {
    this.getUser(userData)
      .subscribe(user => {
        this.isAuth = user.password === userData.password;
      })    
  }

  public getUser(userData: IUser): Observable<IUser> {
    const params: ISearch ={
      search: [
        {
          field: 'firstName',
          operator: 'eq',
          value: userData.firstName
        }
        {
          field: 'secondName',
          operator: 'eq',
          value: userData.secondName
        }
      ]
    }

    return this._rest.getByParams('users', params) as Observable<IUser>;
  }
}