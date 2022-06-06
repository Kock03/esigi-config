import {NgModule } from '@angular/core';
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
import { EmailCreateComponent } from './email-create/email-create.component';
import { TranslateModule } from '@ngx-translate/core';





const routes: Routes = [
  {
    path: 'novo',
    component: EmailCreateComponent,
  },
];

@NgModule({
  declarations: [
    EmailCreateComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule.forChild(),
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  entryComponents: [EmailCreateComponent],
})
export class EmailModule { }
