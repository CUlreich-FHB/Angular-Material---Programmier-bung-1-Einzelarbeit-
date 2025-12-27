import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { courses } from '../../shared/data';
import { NgClass } from "@angular/common";
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect, MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-add-data',
  imports: [
    NgClass,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepicker,
    MatHint,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckbox,
    MatSelectModule
],
  templateUrl: './add-data.html',
  styleUrl: './add-data.scss',
})
export class AddData {
  private fb = inject(FormBuilder);
  public signupForm: FormGroup;
  public courses = courses;

  constructor() {
    this.signupForm = this.fb.group({});
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      courses: ['', Validators.required],
      email: ['', [Validators.required]],
      newsletter: [false],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.valid);
      this.signupForm.reset();
    }
  }
}
