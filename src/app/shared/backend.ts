import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class Backend {
  private http = inject(HttpClient);
  private store = inject(Store);

  public getCourses() {
    this.http.get<any>('http://localhost:5000/courses?_expand=eventLocation').subscribe((data) => {
      console.log(data);
      this.store.courses = data;
    });
  }
}
