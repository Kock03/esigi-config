import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-config',
  templateUrl: './generic-config.component.html',
  styleUrls: ['./generic-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GenericConfigComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['cadastros/opcoes'])
  }

}
