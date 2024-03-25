import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from 'src/models/search-params';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private _serverURL: string;
  private _serverHostName: string;

  constructor(private _httpClient: HttpClient) {}

  public setConfiguration(serverHostName: string): void {
    this._serverHostName = serverHostName;
    this._serverURL = `${this._serverHostName}/api/`;
  }

  public getAll(collectionName: string): Observable<object> {
    return this._httpClient.get(`${this._serverURL}${collectionName}`);
  }

  public getByID(collectionName: string, id: string): Observable<object> {
    return this._httpClient.get(`${this._serverURL}${collectionName}/${id}`);
  }

  public getByParams(collectionName: string, params: ISearch): Observable<object> {
    return this._httpClient.post(`${this._serverURL}${collectionName}`, params);
  }

  public create(collectionName: string, objectToCreate: object): Observable<object> {
    return this._httpClient.post(`${this._serverURL}${collectionName}/create`, objectToCreate);
  }

  public compileCode(language: string, code: string): Observable<string> {
    return this._httpClient.post(`${this._serverURL}compiler/execute`, { language, code }) as Observable<string>;
  }
}
