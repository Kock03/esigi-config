import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-config',
  templateUrl: './projects-config.component.html',
  styleUrls: ['./projects-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsConfigComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goBack(){
    this.router.navigate(['cadastros/opcoes'])
  }

}
