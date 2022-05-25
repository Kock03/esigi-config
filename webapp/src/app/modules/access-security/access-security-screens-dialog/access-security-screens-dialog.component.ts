import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-access-security-screens-dialog',
  templateUrl: './access-security-screens-dialog.component.html',
  styleUrls: ['./access-security-screens-dialog.component.scss']
})
export class AccessSecurityScreensDialogComponent implements OnInit {
  screenForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.screenForm = this.fb.group({
      name: [''],
      number: [''],
      active: [''],
      cnpj: ['']
    })
  }

}
