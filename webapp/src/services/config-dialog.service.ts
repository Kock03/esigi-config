import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfigDialogComponent } from 'src/app/modules/registers/modal/config-dialog.component';


@Injectable()
export class ConfigDialogService {
  constructor(private dialog: MatDialog) { }
  dialogRef!: MatDialogRef<ConfigDialogComponent>;

  public open(options: any) {
    this.dialogRef = this.dialog.open(ConfigDialogComponent, {
      data: {
        title: options.data.title,
        context: options.data.context,
        key: options.data.key,

      },
      width: '80%',
      maxWidth: '1000px',
      height: '80%',
      maxHeight: '600px',
      panelClass: options.panelClass,
      backdropClass: options.backdropClass,
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map(res => {
        return res;
      })
    );
  }
}
