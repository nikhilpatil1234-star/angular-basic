import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { FakeData } from './employee';

// import

@Injectable()
export class EmployeeService {
  private _url: string = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

  private _urlId: string = `https://jsonplaceholder.typicode.com/posts/{{id}}`;
  constructor(private http: HttpClient) {}
  getEmplyoees(): Observable<FakeData[]> {
    return this.http
      .get<FakeData[]>(this._url)
      .pipe(catchError(this.errorHandler));
    // return [
    //   { id: 1, name: 'nikhil', age: 25 },
    //   { id: 2, name: 'kousik', age: 27 },
    //   { id: 3, name: 'sachin', age: 28 },
    //   { id: 4, name: 'rakesh', age: 29 },
    // ];
  }
  getEmplyooId(): Observable<FakeData[]> {
    return this.http
      .get<FakeData[]>(`https://jsonplaceholder.typicode.com/posts/{{id}}`)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
