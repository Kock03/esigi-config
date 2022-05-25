import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccessSecurityPortalComponent } from './access-security-portal/access-security-portal.component';
import { AccessSecurityScreensComponent } from './access-security-screens/access-security-screens.component';
import { AccessSecurityProfileComponent } from './access-security-profile/access-security-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AccesSecurityScreensDialogComponent } from './acces-security-screens-dialog/acces-security-screens-dialog.component';
import { AccessSecurityModuleRegisterDialog } from './access-security-module-register/access-security-module-register.dialog';


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
    component: AccessSecurityScreensComponent,
  },
  {
    path: 'perfil',
    component: AccessSecurityProfileComponent,
  },
];

@NgModule({
  declarations: [
    AccessSecurityPortalComponent,
    AccessSecurityScreensComponent,
    AccessSecurityProfileComponent,
    AccessSecurityModuleRegisterDialog,
    AccesSecurityScreensDialogComponent,
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
    AccesSecurityScreensDialogComponent
  ],
})
export class AccessSecurityModule { }
