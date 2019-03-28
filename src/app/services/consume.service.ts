import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConsumeService {

  private _url = 'http://api.icndb.com/jokes/random';
  constructor(private _http: HttpClient) { }

  getJoke(): Observable<any> {
    return this._http
      .get(this._url, { responseType: 'json' })
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    console.log(error);
    return throwError(error.json() || 'Server error');
  }
}
