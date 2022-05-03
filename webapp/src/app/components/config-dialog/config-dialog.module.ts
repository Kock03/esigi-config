import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [ConfigDialogModule],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,  
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
  ],
  entryComponents: [ConfigDialogModule],
  exports: [ConfigDialogModule],
  providers: [ConfigDialogModule],
})
export class ConfigDialogModule {

  


}
