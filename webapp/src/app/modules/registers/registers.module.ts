import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersInitialComponent } from './registers-initial/registers-initial.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const routes: Routes = [
  {
    path: 'opcoes',
    component: RegistersInitialComponent,
  },
];


@NgModule({
  declarations: [
    RegistersInitialComponent
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
  ]
})
export class RegistersModule { }
