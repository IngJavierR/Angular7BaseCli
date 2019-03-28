import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConsumeService {
  private _url = 'http://api.icndb.com/jokes/random';
  private _urlLogin = 'https://reqres.in/api/login';
  private _urlToken = 'http://echo.jsontest.com/token/123456790';

  constructor(private _http: HttpClient) { }

  getJoke(): Observable<any> {
    return this._http
      .get(this._url, { responseType: 'json' });
  }

  login(username: string, password: string): Observable<any> {
    const data = { username: username, password: password };
    return this._http
      .post(this._urlLogin, data, { responseType: 'json' });
  }

  renewToken(): Observable<any> {
    return this._http
      .get(this._urlToken, { responseType: 'json' });
  }
}
