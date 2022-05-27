import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-security-screens-dialog',
  templateUrl: './access-security-screens-dialog.component.html',
  styleUrls: ['./access-security-screens-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccessSecurityScreensDialogComponent implements OnInit {
  screenForm!: FormGroup;
  data: [] = [];
  Screen: any;

  displayedColumns: string[] = [
    'moduleName',
    'screenName',
  ];
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<AccessSecurityScreensDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.screenForm = this.fb.group({
      moduleName: [''],
      identifier: [''],
      screenName: [''],
      active: ['']
    })
  }

  close() {
    this.dialogRef.close()
    sessionStorage.clear
  }

}
