import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigDialogService } from 'src/services/config-dialog.service';
import { TAB_CUSTOMER_MENU_LIST } from '../utils/client-config-list';
import { TAB_COLLABORATOR_MENU_LIST } from '../utils/collaborator-config-list';
import { TAB_FINANCE_MENU_LIST } from '../utils/finances-config-list';
import { TAB_GENERIC_MENU_LIST } from '../utils/gereric-config-list';
import { TAB_PROJECT_MENU_LIST } from '../utils/project-config-list';
import { MenuItem } from '../utils/_menu-item';

@Component({
  selector: 'app-register-menu',
  templateUrl: './register-menu.component.html',
  styleUrls: ['./register-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterMenuComponent implements OnInit {
  context: any;
  menuTabList!: any[];

  constructor(
    private configDialogService: ConfigDialogService,
    private location: Location,
    private router: Router,

  ) { }
  ngOnInit(): void {
    this.context = this.location.path().split('/cadastros/')[1];
    console.log(this.context)
    this.selectMenu(this.context);
  }

  selectMenu(context: any) {
    switch (context) {
      case 'customer':
        this.menuTabList = TAB_CUSTOMER_MENU_LIST;
        break;
      case 'collaborator':
        this.menuTabList = TAB_COLLABORATOR_MENU_LIST;
        break;
      case 'project':
        this.menuTabList = TAB_PROJECT_MENU_LIST;
        break;
      case 'finance':
        this.menuTabList = TAB_FINANCE_MENU_LIST;
        break;
      case 'generic':
        this.menuTabList = TAB_GENERIC_MENU_LIST;
        break;
      default:
        break;
    }
  }

  openModal(menu: MenuItem) {
    const dialogRef = {
      data: {
        title: menu.modalTitle,
        context: this.context,
        key: menu.key,
      },
      panelClass: 'config-modal',
    };
    this.configDialogService.open(dialogRef);
  }

  goBack() {
    this.router.navigate(['cadastros/opcoes']);
  }
}
