import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { ConfigDialogComponent } from 'src/app/components/config-dialog/config-dialog.component';


@Injectable()
export class ConfigDialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef!: MatDialogRef<ConfigDialogComponent>;

  public open(options: any) {
    this.dialogRef = this.dialog.open(ConfigDialogComponent, {
      data: {
        title: options.data.title,
        subtitle: options.data.subtitle,
        domain: options.data.domain,
      },
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
