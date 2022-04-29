import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finances-config',
  templateUrl: './finances-config.component.html',
  styleUrls: ['./finances-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FinancesConfigComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goBack(){
    this.router.navigate(['cadastros/opcoes'])
  }

}
