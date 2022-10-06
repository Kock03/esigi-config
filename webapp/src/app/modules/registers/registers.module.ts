import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ConfigDialogComponent } from './modal/config-dialog.component';
import { RegisterMenuComponent } from './menu/register-menu.component';
import { RegisterComponent } from './registers.component';

const routes: Routes = [
  {
    path: 'opcoes',
    component: RegisterComponent,
  },
  {
    path: ':context',
    component: RegisterMenuComponent,
  },


];


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterMenuComponent,
    ConfigDialogComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    RouterModule,
    MatInputModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,

  ]
})
export class RegistersModule { }
