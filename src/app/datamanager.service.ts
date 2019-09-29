import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { writeFileSync, readFileSync } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(
    private http: HttpClient

  ) { }

  private log(message, fail?) {
    const bg = fail ? '#eb1616' : '#62cc99';
    console.log(`%cAPI${fail ? ' fail' : ''}` + `%c ${message}`, `background:${bg};color:#fff;padding:2px 5px`, '');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // alert(`Failed to load data (${operation})`)
      console.error(error);
      this.log(`${operation} failed: ${error.message}`, true);
      return of(result as T);
    };
  }

  fetchProjects(): Observable<{}> {
    console.log('get projects');
    return this.http.get('assets/data/projects.json').pipe(
      tap(_ => console.log('fetched projects')),
      catchError(this.handleError('fetchSetupStatus', []))
    );
  }

}
