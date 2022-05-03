import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigDialogService } from 'src/services/config-dialog.service';
import { MenuItem } from '../_menu-item';
import { CUSTOMER_MENU_LIST } from './client-config-list';


@Component({
  selector: 'app-client-config',
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ClientConfigComponent implements OnInit {
  menuList = CUSTOMER_MENU_LIST;
  constructor(
    private router: Router,
    private configDialogService: ConfigDialogService
  ) {}

  ngOnInit(): void {}

  openModal(menu: MenuItem){
    const dialogRef = {
      data: {
        title: menu.modalTitle,
        entity: menu.entity,
      },
      panelClass: 'config-modal',
    };
    this.configDialogService.open(dialogRef);
  }

  goBack() {
    this.router.navigate(['cadastros/opcoes']);
  }
}
