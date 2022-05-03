import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfigDialogComponent } from 'src/app/components/config-dialog/config-dialog.component';
import { ConfigDialogService } from 'src/services/config-dialog.service';

@Component({
  selector: 'app-client-config',
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientConfigComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private configDialogService: ConfigDialogService
  ) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['cadastros/opcoes']);
  }

  createClienteRegister() {
    const options = {
      data: {
        title: 'Registrar novo cliente',
      },
      panelClass: 'config-modal',
    };
    this.configDialogService.open(options);

    const dialogRef = this.dialog.open(ConfigDialogComponent, {

    });
  }
}
