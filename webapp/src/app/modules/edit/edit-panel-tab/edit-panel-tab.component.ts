import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-panel-tab',
  templateUrl: './edit-panel-tab.component.html',
  styleUrls: ['./edit-panel-tab.component.scss']
})
export class EditPanelTabComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.onChange.next(true);
  }

}
