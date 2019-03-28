import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import { ConsumeService } from '../services/consume.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _dataService: DataService, private _consumeService: ConsumeService) { }

  private applyCredentials = (req: HttpRequest<any>) => {
    const token = this._dataService.getToken();

    if (token) {
      // Agregar token header
      // req = req.clone({ headers: req.headers.append('token', token) });
    }

    return req;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = this.applyCredentials(req);

    return next.handle(authReq).pipe(
      // Log de peticiones HTTP
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this._dataService.removeToken();
            this._dataService.setIsLoadingEvent(false);

            return this._consumeService.renewToken().pipe(
              flatMap(newToken => {
                this._dataService.setToken(newToken);
                if (newToken) {
                  this._dataService.setIsLoadingEvent(true);
                  return next.handle(this.applyCredentials(req));
                } else {
                  return throwError(error.error.message || error.message || 'Server error');
                }
              })
            );
          } else {
            return throwError(error.error.message || error.message || 'Server error');
          }
        } else {
          return throwError(error);
        }
      })
    );
  }
}
