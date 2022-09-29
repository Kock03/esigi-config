import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TAB_MENU_LIST } from './utils/menu';

@Component({
  selector: 'app-registers-initial',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  tabMenuList = TAB_MENU_LIST;

  constructor(
    private router: Router,
    public translateService: TranslateService
  ) { }

  registerDetails(context: any) {
    this.router.navigate([`/cadastros/${context}`]);
  }
}
