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
import { ClientConfigComponent } from './client-config/client-config.component';
import { CollaboratorConfigComponent } from './collaborator-config/collaborator-config.component';
import { ProjectsConfigComponent } from './projects-config/projects-config.component';
import { FinancesConfigComponent } from './finances-config/finances-config.component';
import { GenericConfigComponent } from './generic-config/generic-config.component';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: 'opcoes',
    component: RegistersInitialComponent,
  },
  {
    path: 'clientes',
    component: ClientConfigComponent,
  },
  {
    path: 'colaboradores',
    component: CollaboratorConfigComponent,
  },
  {
    path: 'projetos',
    component: ProjectsConfigComponent,
  },
  {
    path: 'financeiro',
    component: FinancesConfigComponent,
  },
  {
    path: 'genericos',
    component: GenericConfigComponent,
  },
];


@NgModule({
  declarations: [
    RegistersInitialComponent,
    ClientConfigComponent,
    CollaboratorConfigComponent,
    ProjectsConfigComponent,
    FinancesConfigComponent,
    GenericConfigComponent
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
  ]
})
export class RegistersModule { }
