import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import {
  MatDialog,
} from '@angular/material/dialog';
import { AccessSecurityScreensDialogComponent } from '../access-security-screens-dialog/access-security-screens-dialog.component';
import { AccessSecurityModuleRegisterDialog } from '../access-security-module-register-dialog/access-security-module-register.dialog';

@Component({
  selector: 'app-access-security-portal',
  templateUrl: './access-security-portal.component.html',
  styleUrls: ['./access-security-portal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AccessSecurityPortalComponent implements OnInit {

  method!: string;

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialogModule() {
    this.method = 'add';
    sessionStorage.setItem('method', this.method);
    const dialogRef = this.dialog.open(AccessSecurityModuleRegisterDialog, {
      width: '500px',
      height: '650px',
    });

    // dialogRef.afterClosed().subscribe(dependent => {
    //   if (dependent) {
    //     this.getDependentsList();
    //   }
    // });
  }

  openDialogScreens(){
    this.method = 'add';
    sessionStorage.setItem('method', this.method);
    const dialogRef = this.dialog.open(AccessSecurityScreensDialogComponent, {
      width: '500px',
      height: '650px',
    });

    // dialogRef.afterClosed().subscribe(dependent => {
    //   if (dependent) {
    //     this.getDependentsList();
    //   }
    // });
  }

  openProfileTab(){
    this.router.navigate(['seguranca/perfil']);
  }
}
