import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { courses } from '../../shared/data';

@Component({
  selector: 'app-add-data',
  imports: [ReactiveFormsModule],
  templateUrl: './add-data.html',
  styleUrl: './add-data.scss',
})
export class AddData {
  private fb = inject(FormBuilder);
  public signupForm: any;
  public courses = courses;

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      courses: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.valid);
    }
  }
}
