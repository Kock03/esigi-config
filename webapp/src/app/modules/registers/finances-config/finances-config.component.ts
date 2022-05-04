import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigDialogService } from 'src/services/config-dialog.service';
import { MenuItem } from '../_menu-item';
import { FINANCE_MENU_LIST } from './finances-config-list';

@Component({
  selector: 'app-finances-config',
  templateUrl: './finances-config.component.html',
  styleUrls: ['./finances-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FinancesConfigComponent implements OnInit {
  menuList = FINANCE_MENU_LIST;

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
