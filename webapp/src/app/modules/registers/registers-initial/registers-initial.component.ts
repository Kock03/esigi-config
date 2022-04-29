import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registers-initial',
  templateUrl: './registers-initial.component.html',
  styleUrls: ['./registers-initial.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistersInitialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clientConfig(){
    this.router.navigate(['cadastros/clientes'])
  }

  collaboratorConfig(){
    this.router.navigate(['cadastros/colaboradores'])
  }

  projectConfig(){
    this.router.navigate(['cadastros/projetos'])
  }

  financeConfig(){
    this.router.navigate(['cadastros/financeiro'])
  }

}
