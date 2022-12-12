import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-active-directory-create',
  templateUrl: './active-directory-create.component.html',
  styleUrls: ['./active-directory-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActiveDirectoryCreateComponent implements OnInit {
  @Input('form') settingForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public translateService: TranslateService) {}

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

  goHome(port: number): void {
    location.replace(`http://44.205.159.254:${port}/portal`);
  }

}

