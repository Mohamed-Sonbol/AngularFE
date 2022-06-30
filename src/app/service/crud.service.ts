import { Injectable } from '@angular/core';
import { User } from './User';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:3000';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  // Add
  AddUser(data: String): Observable<any> {
    let API_URL = `${this.REST_API}/add-user`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Get all objects
  GetUsers() {
    return this.httpClient.get(`${this.REST_API}/users`);
  }
  // Get single object
  Getcourses(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/view-course`);
  }
  // Update
  updateUser(id:any, data:any): Observable<any> {
    console.log(id)
    console.log(data)
    let API_URL = `${this.REST_API}/update-user`;
    return this.httpClient.put(API_URL, {data, id}, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // Delete
  deleteUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-user/`;
    return this.httpClient.put(API_URL, {id} ,{ headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
