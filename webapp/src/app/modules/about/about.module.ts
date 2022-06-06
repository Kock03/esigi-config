import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AboutComponent } from "./about.component";

const routes: Routes = [
  {
    path: 'info',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    RouterModule,

  ],
  entryComponents: [AboutComponent],
})
export class AboutModule { }
