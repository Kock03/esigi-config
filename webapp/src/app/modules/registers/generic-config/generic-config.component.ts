import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigDialogService } from 'src/services/config-dialog.service';
import { MenuItem } from '../_menu-item';
import { GENERIC_MENU_LIST } from './gereric-config-list';

@Component({
  selector: 'app-generic-config',
  templateUrl: './generic-config.component.html',
  styleUrls: ['./generic-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GenericConfigComponent implements OnInit {
  menuList = GENERIC_MENU_LIST;

  constructor(
    private configDialogService: ConfigDialogService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openModal(menu: MenuItem) {
    const dialogRef = {
      data: {
        title: menu.modalTitle,
        entity: menu.entity,
      },
      panelClass: 'config-modal',
    };
    this.configDialogService.open(dialogRef);
  }

  goBack(){
    this.router.navigate(['cadastros/opcoes'])
  }

}
