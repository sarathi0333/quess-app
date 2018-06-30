import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  postMessage(url: string, data: object): Observable<any> {
    return this.http.post(url, data, httpOptions).pipe(
      tap((response) => { }),
      catchError(this.handleError('post msg'))
    )
  }

  getMessage(url: string, params: any): Observable<any> {
    let param = new HttpParams();
    param = param.append('user', params.user_id);
    param = param.append('lang', params.lang);
    const httpOptions = new HttpHeaders({ 'Authorization': `Bearer ${params.token}` })
    return this.http.get(url, { headers: httpOptions, params: param }).pipe(
      tap((response) => { }),
      catchError(this.handleError('post msg'))
    )
  }

  updateMessag(url: string, data: object, params: any): Observable<any> {
    let param = new HttpParams();
    const httpOptions = new HttpHeaders({ 'Authorization': `Bearer ${params.token}` })
    return this.http.put(url, data, { headers: httpOptions, params: param } ).pipe(
      tap(response => {}),
      catchError(this.handleError('post msg'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
