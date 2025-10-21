import { Component } from '@angular/core';
import { courses } from '../../shared/data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-data',
  imports: [DatePipe],
  templateUrl: './data.html',
  styleUrl: './data.scss',
})
export class Data {
  public courses = courses;
}
