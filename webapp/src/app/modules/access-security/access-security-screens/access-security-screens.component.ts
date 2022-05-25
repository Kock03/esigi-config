import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-access-security-screens',
  templateUrl: './access-security-screens.component.html',
  styleUrls: ['./access-security-screens.component.scss']
})
export class AccessSecurityScreensComponent implements OnInit {
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
