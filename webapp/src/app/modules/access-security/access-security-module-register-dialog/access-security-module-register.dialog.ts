import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-access-security-module-register',
  templateUrl: './access-security-module-register.dialog.html',
  styleUrls: ['./access-security-module-register.dialog.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccessSecurityModuleRegisterDialog implements OnInit {

  range = new FormGroup({});
  moduleForm!: FormGroup
  
  dataTable: [] = [];
  moduleId!: string;
  method!: string;
  moduleControl: any;

  constructor(
    public dialogRef: MatDialogRef<AccessSecurityModuleRegisterDialog>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.method = sessionStorage.getItem('method')!;
    this.moduleId = sessionStorage.getItem('moduleId')!;
    this.initForm();
  }

  initForm(): void {
    this.moduleForm = this.fb.group({
      moduleName: ['', Validators.required],
      identifier: ['', Validators.required],
      isActive: [true],
      activity: { id: this.moduleId }
    });
    if (this.dataTable) {
      this.moduleForm.patchValue(this.dataTable);
    }

  }

  close() {
    this.dialogRef.close()
    sessionStorage.clear
  }
}
