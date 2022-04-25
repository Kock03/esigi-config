import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registers-initial',
  templateUrl: './registers-initial.component.html',
  styleUrls: ['./registers-initial.component.scss']
})
export class RegistersInitialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clientConfig(){
    this.router.navigate(['cadastros/clientes'])
  }

}
