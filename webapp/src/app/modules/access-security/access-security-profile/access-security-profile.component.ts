import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { MatDialogRef } from '@angular/material/dialog';



interface PermissionsClass {
  name: string;
  children?: PermissionsClass[];
}



const PERMISSION_DATA: PermissionsClass[] = [
  {
    name: 'Clientes',
    children: [{name:'Cadastro'}, {name:'Contatos'}]
  },
  {
    name: 'Gestão de Pessoas',
    children: [{name:'Cadastro'}, {name:'Educação'}, {name:'Dados Bancários'}, {name:'Financeiro'}, {name:'Skills'}, {name:'Documentos'}]
  }
];

@Component({
  selector: 'app-access-security-profile',
  templateUrl: './access-security-profile.component.html',
  styleUrls: ['./access-security-profile.component.scss']
})


export class AccessSecurityProfileComponent implements OnInit {
  profileForm!: FormGroup

  data: [] = []
  method: string = '';
  profileId!: string;

  permissionControl = new NestedTreeControl<PermissionsClass>(node => node.children);
  dataSource = new MatTreeNestedDataSource<PermissionsClass>();

  constructor(
    // public dialogRef: MatDialogRef<AccessSecurityProfileComponent>,
    private fb: FormBuilder,
  ) {

    this.dataSource.data = PERMISSION_DATA;

   }

   hasChild = (_: number, node: PermissionsClass) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.method = sessionStorage.getItem('method')!;
    this.profileId = sessionStorage.getItem('moduleId')!;
    this.initForm();
  }

  initForm(): void {
    this.profileForm = this.fb.group({
      profileName: ['', Validators.required],
      identifier: ['', Validators.required],
    });
    if (this.data) {
      this.profileForm.patchValue(this.data);
    }
  }
}



  


  