import { Component, ModuleWithProviders, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ModuleProvider } from 'src/providers/module.provider';

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
  method: string = '';
  moduleControl: any;
  Module: any;
  activityId!: string;
  displayedColumns: string[] = ['moduleName', 'identifier', 'active', ];


  constructor(
    public dialogRef: MatDialogRef<AccessSecurityModuleRegisterDialog>,
    private moduleProvider: ModuleProvider,
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
      activity: { id: this.activityId }
    });
    if (this.dataTable) {
      this.moduleForm.patchValue(this.dataTable);
    }

  }

  async getModuleList() {
    const moduleList = await this.moduleProvider.findOne(this.activityId);
    this.dataTable = moduleList.module;
  }

  async saveModule() {
    const data = this.moduleForm.getRawValue();
    console.log(data);
    if (this.method === 'edit') {
      try {
        await this.moduleProvider.update(this.moduleId, data);
        this.method = '';
        this.initForm();
        this.getModuleList();
      } catch (error: any) {
        console.log('ERROR 132' + error);
      }
    } else {
      try {
        await this.moduleProvider.store(data);

        this.initForm();
        this.getModuleList();
        this.moduleControl.reset();
      } catch (error: any) {
        console.log('ERROR 132' + error);
      }
    }
    this.method = '';
  }

  close() {
    this.dialogRef.close()
    sessionStorage.clear
  }
}
