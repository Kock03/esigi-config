import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-edit-panel-tab',
  templateUrl: './edit-panel-tab.component.html',
  styleUrls: ['./edit-panel-tab.component.scss']
})
export class EditPanelTabComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('panelTable') panelTable!: MatTable<any>;
  displayedPanel: string[] = [
    'project',
    'paper',
    'startDate',
    'endDate',
    'hoursRun',
    'manager',
    'client',
  ];
  panels: any[] = [
    {
      project: 'MariSol',
      paper: 'Programador',
      startDate: '13/05/2022',
      endDate: 'indefinido',
      hoursRun: '7 horas',
      manager: 'Danilo',
      client: 'Mari',
    },
  ];

  filteredPanelList!: any[];

  // constructor(private router: Router, private panelProvider: any) { }

  async ngOnInit() {
    //this.getPanelList();
  }

  // async getPanelList() {
  //   try {
  //     this.filteredPanelList = this.panel = await this.panelProvider.findAll();
  //   } catch (error) {
  //     console.error(error);
  //   }
}
