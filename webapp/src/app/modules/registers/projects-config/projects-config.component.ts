import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PROJECT_MENU_LIST } from './projects-config-list';
import { ConfigDialogService } from 'src/services/config-dialog.service';
import { MenuItem } from '../_menu-item';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-config',
  templateUrl: './projects-config.component.html',
  styleUrls: ['./projects-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsConfigComponent implements OnInit {
  menuList = PROJECT_MENU_LIST;

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
