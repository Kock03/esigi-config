import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-directory-create',
  templateUrl: './active-directory-create.component.html',
  styleUrls: ['./active-directory-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActiveDirectoryCreateComponent implements OnInit {
  @Input('form') settingForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.settingForm = this.fb.group({
      adAdress: ['', Validators.required],
      user: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6),
        ],
      ],
    });
  }

}

