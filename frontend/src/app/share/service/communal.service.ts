import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class CommunalService {
  constructor(private http:HttpClient) { }

  get(url:string):Observable<any[]>{
    return this.http.get<any[]>(url).pipe(
      tap(data => {'do something in there,record'}),
      catchError(this.handleError('get',[]))
    );
  }

  getById(url:string,id:number):Observable<any[]>{
    const u = `${url}/${id}`;
    return this.http.get<any[]>(u).pipe(
      tap(data => {}),
      catchError(this.handleError(`get id = ${id}`,[]))
    );
  }

  //update
  put(url:string,params:Object):Observable<any>{
    return this.http.put<any>(url,params,httpOptions).pipe(
      tap(data => {}),
      catchError(this.handleError(`put ${url} and ${params} error`,[]))
    )
  }

  post(url:string,params:any):Observable<any>{
    return this.http.post<any>(url,params,httpOptions).pipe(
      tap(data => {}),
      catchError(this.handleError(`post ${url} and ${params} error`,[]))
    )
  }

  delete(url:string,id:number):Observable<any>{
    const u = `${url}/${id}`;
    return this.http.delete<any>(u,httpOptions).pipe(
      tap(data => {}),
      catchError(this.handleError(`delete ${u} and ${id} error`))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
