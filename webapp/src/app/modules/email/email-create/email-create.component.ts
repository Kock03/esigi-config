import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface emailTypes {
  id: number;
  name: string;
}

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmailCreateComponent implements OnInit {
  settingForm!: FormGroup;

  typeControl = new FormControl();

  types: emailTypes[] = [
    { id: 1, name: 'SMTP' },
    { id: 2, name: 'POP' },
    { id: 3, name: 'IMAP' },
  ];

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.settingForm = this.fb.group({
      serverType: ['', Validators.required],
      incomingServerName: ['', Validators.required],
      door: ['', Validators.required],
      checkServer: ['', Validators.required],
      checkLogin: ['', Validators.required],
      outgoingServerName: ['', Validators.required],
      outgoingDoor: ['', Validators.required],
      outgoingCheckLogin: ['', Validators.required],
      outgoingEncryptionMethod: ['', Validators.required],
      incomingEncryptionMethod: ['', Validators.required],
    });
  }

  compareSelect(o1: any, o2: any): boolean {
    if (!o1 || !o2) {
      return false;
    }
    return o1.id === o2.id;
  }



}
