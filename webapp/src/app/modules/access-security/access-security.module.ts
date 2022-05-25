import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccessSecurityPortalComponent } from './access-security-portal/access-security-portal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
<<<<<<< HEAD
import { AccesSecurityScreensDialogComponent } from './acces-security-screens-dialog/acces-security-screens-dialog.component';
import { AccessSecurityModuleRegisterDialog } from './access-security-module-register-dialog/access-security-module-register.dialog';
=======
import { AccessSecurityScreensDialogComponent } from './access-security-screens-dialog/access-security-screens-dialog.component';
import { AccessSecurityModuleRegisterDialog } from './access-security-module-register/access-security-module-register.dialog';
import { AccessSecurityProfileDialogComponent } from './access-security-profile-dialog/access-security-profile-dialog.component';
>>>>>>> 90c24023f95174c648cc529841f2e097f5c6edbf


const routes: Routes = [
  {
    path: 'portal',
    component: AccessSecurityPortalComponent,
  },
  {
    path: 'module',
    component: AccessSecurityModuleRegisterDialog,
  },
  {
    path: 'tela',
    component: AccessSecurityScreensDialogComponent,
  },
  {
    path: 'perfil',
    component: AccessSecurityProfileDialogComponent,
  },
];

@NgModule({
  declarations: [
    AccessSecurityPortalComponent,
    AccessSecurityModuleRegisterDialog,
    AccessSecurityScreensDialogComponent,
    AccessSecurityProfileDialogComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
  ],
  entryComponents: [
    AccessSecurityPortalComponent,
    AccessSecurityModuleRegisterDialog,
    AccessSecurityScreensDialogComponent,
    AccessSecurityProfileDialogComponent
  ],
})
export class AccessSecurityModule { }
