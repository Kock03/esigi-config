import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActiveDirectoryCreateComponent } from './active-directory-create/active-directory-create.component';

const routes: Routes = [
  {
    path: 'novo',
    component: ActiveDirectoryCreateComponent,
  },
];

@NgModule({
  declarations: [
    ActiveDirectoryCreateComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  entryComponents: [ActiveDirectoryCreateComponent],
})
export class ActiveDirectoryModule { }
