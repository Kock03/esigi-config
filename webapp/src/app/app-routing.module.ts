import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenComponent } from './components/validate-token/validate-token.component';
import { EditCreateComponent } from './modules/edit/edit-create.component';

const routes: Routes = [
  {
    path: '',

    redirectTo: 'active_directory/novo',

    pathMatch: 'full',
  },
  {
    path: 'validate/:id',
    component: ValidateTokenComponent,
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./modules/email/email.module').then((m) => m.EmailModule),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./modules/edit/edit.module').then((m) => m.EditModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'active_directory',
    loadChildren: () =>
      import('./modules/active-directory/active-directory.module').then((m) => m.ActiveDirectoryModule),
  },
  {
    path: 'cadastros',
    loadChildren: () =>
      import('./modules/registers/registers.module').then((m) => m.RegistersModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forChild(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
