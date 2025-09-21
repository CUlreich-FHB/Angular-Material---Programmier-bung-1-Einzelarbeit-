import { Component, inject } from '@angular/core';
import { courses } from '../../shared/data';
import { DatePipe } from '@angular/common';
import { Backend } from '../../shared/backend';
import { Store } from '../../shared/store';

@Component({
  selector: 'app-data',
  imports: [DatePipe],
  templateUrl: './data.html',
  styleUrl: './data.scss',
})
export class Data {
  public backend = inject(Backend);
  public store = inject(Store);

  ngOnInit() {
    this.backend.getCourses();
  }
}
