import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborator-config',
  templateUrl: './collaborator-config.component.html',
  styleUrls: ['./collaborator-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CollaboratorConfigComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['cadastros/opcoes'])
  }


}
