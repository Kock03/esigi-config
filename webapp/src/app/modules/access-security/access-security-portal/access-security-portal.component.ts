import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-security-portal',
  templateUrl: './access-security-portal.component.html',
  styleUrls: ['./access-security-portal.component.scss']
})
export class AccessSecurityPortalComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openSecurityModule() {
    this.router.navigate(['seguranca/module']);
  }

  openSecurityScreen() {
    this.router.navigate(['seguranca/tela']);
  }

  openSecurityProfile() {
    this.router.navigate(['seguranca/perfil']);
  }

  moduleRegister() {

  }

  screenRegister() {

  }

  profileRegister() {

  }
}
