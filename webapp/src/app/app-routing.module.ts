import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',

    redirectTo: '/email/novo',

    pathMatch: 'full',
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./modules/email/email.module').then((m) => m.EmailModule),
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
export class AppRoutingModule { }
