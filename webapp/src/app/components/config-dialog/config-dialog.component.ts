import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.scss']
})
export class ConfigDialogComponent implements OnInit {
  
  displayedColumns: string[] = [
    'name',
    'icon',
  ]

  dataTable: [] = [];
  configForm!: FormGroup;

  // public domain: string = '';
  // public subtitleMessage: string = '';

  constructor(

    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfigDialogComponent>
  ) { }

  ngOnInit(): void {

    // this.subtitleMessage = this.data.subtitle;
    // this.domain = this.data.domain;
    this.initForm();
  }

  initForm(){
    this.configForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
    sessionStorage.clear;
  }

}
