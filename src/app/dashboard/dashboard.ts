import { Component } from '@angular/core';
import { Data } from './data/data';
import { AddData } from './add-data/add-data';

@Component({
  selector: 'app-dashboard',
  imports: [Data, AddData],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
