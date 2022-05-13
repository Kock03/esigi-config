import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCreateComponent } from './edit-create.component';
import { EditTabComponent } from './edit-tab/edit-tab.component';
import { EditEducationTabComponent } from './edit-education-tab/edit-education-tab.component';
import { EditSkillTabComponent } from './edit-skill-tab/edit-skill-tab.component';
import { EditPanelTabComponent } from './edit-panel-tab/edit-panel-tab.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';


const routes: Routes = [
  {
    path: 'novo',
    component: EditCreateComponent,
  },
];

@NgModule({
  declarations: [
    EditCreateComponent,
    EditTabComponent,
    EditEducationTabComponent,
    EditSkillTabComponent,
    EditPanelTabComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    MatTableModule,
    MatCheckboxModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxMaskModule,
    MatDialogModule,
    MatSortModule,
  ],
  entryComponents: [
    EditCreateComponent,
    EditTabComponent,
    EditEducationTabComponent,
    EditSkillTabComponent,
    EditPanelTabComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditModule { }
