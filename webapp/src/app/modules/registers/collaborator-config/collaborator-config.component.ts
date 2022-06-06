import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigDialogComponent } from 'src/app/components/config-dialog/config-dialog.component';
import { ConfigDialogService } from 'src/services/config-dialog.service';
import { MenuItem } from '../_menu-item';
import { COLLABORATOR_MENU_LIST } from './collaborator-config-list';

@Component({
  selector: 'app-collaborator-config',
  templateUrl: './collaborator-config.component.html',
  styleUrls: ['./collaborator-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CollaboratorConfigComponent implements OnInit {
  menuList = COLLABORATOR_MENU_LIST;
  constructor(
    private configDialogService: ConfigDialogService,
    private router: Router,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {}

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

  goBack() {
    this.router.navigate(['cadastros/opcoes']);
  }
}
