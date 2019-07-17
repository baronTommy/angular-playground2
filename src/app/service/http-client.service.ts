import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }


  getUsers() {
    // const url = 'http://localhost:3003/users'
    const url = 'http://localhost:3003/xxx'
    return this.http.get(url)
    .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
   
    // クライアント側あるいはネットワークによるエラー
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    
      // サーバー側からのエラー
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
   
    // エラーメッセージの返却
    return throwError('Something bad happened; please try again later.')
      
      
  }
}
