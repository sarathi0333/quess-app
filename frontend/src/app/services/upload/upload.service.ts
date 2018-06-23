import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Credentials } from './stored.interface';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  quess: Credentials;
  constructor(private http: HttpClient) {
  }

  upload(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    let quess = localStorage.getItem('quess');
    this.quess = JSON.parse(quess);
    let token = this.quess.token;
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    };
    formData.append('userData', fileToUpload, fileToUpload.name);
    return this.http.post('/api/user', formData, httpOptions).pipe(
      tap((response) => { }),
    )
  }
}
