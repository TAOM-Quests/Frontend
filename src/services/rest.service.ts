import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearch } from 'src/models/search-params';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private _serverHostName: string;
  private _serverURL: string = 'http://localhost:7777/api/';

  constructor(private _httpClient: HttpClient) {}

  public setConfiguration(serverHostName: string): void {
    this._serverHostName = serverHostName;
    this._serverURL = `https://${this._serverHostName}/api/`;
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
