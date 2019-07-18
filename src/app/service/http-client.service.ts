import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, filter } from 'rxjs/operators';
import { Observable, throwError, OperatorFunction } from 'rxjs';

// --------------------------------------------
interface User {
  id: number
  name: string
  nickname: string
}
const url = 'http://localhost:3003/users'
// const url = 'http://localhost:3003/xxx'

// 値をいじる
const mapA: OperatorFunction<User[], User[]> = map(v => 
   v.map(r => ({...r, id:r.id + 10}))
)

// API 結果全体に対してのフィルタ
const filterA: OperatorFunction<User[], User[]> = filter(v => v.length > 0)

// --------------------------------------------


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) { }

  // Observables
  // 非同期データソース ( ストリーム ) を表すクラスで、言葉通り Observe ( 観察 ) する何か

  // Operators
  // Observable に対してフィルターをかけるなど値を加工するためのメソッド群

  getUsers():Observable<User[]> {


    return this.http.get<User[]>(url)
      .pipe(

        filterA,
        mapA,

        // エラーハンドリング 例外？が発生しないと
        // this.handleError は 実行されない？
        // 例外発生すると ここに来る？ pipe内ならどこでも良い...
        catchError(this.handleError),

      );


  }

  private handleError(error: HttpErrorResponse) {
    console.log('handleError')

   
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
