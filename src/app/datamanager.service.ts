import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  projects;
  categories;

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
    console.log('fetch projects');
    return this.http.get('assets/data/projects.json').pipe(
      tap(_ => console.log('fetched projects')),
      catchError(this.handleError('fetchProjects', []))
    );
  }

  load() {
    console.log('LOAD DATA')
    return new Promise((resolve, reject) => {
      this.http
      .get('assets/data/projects.json')
      .subscribe(response => {
        this.projects = response;
        // this.categories = [...new Set(response.map(item => item.category))];
        // console.log([...new Set(response.map(item => item.category))]);
        this.categories = this.projects.map(item => item.category);
        this.categories = this.categories.filter((item, index) => this.categories.indexOf(item) === index);
        resolve(true);
      })
    })
  }

  setProjects(projects) {
    console.log('set projects');
    this.projects = projects;
  }

  getProjects() {
    console.log('get projects');
    return this.projects;
  }

  getCategories() {
    console.log('get categories');
    return this.categories;
  }

}
