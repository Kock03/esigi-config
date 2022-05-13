import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-education-tab',
  templateUrl: './edit-education-tab.component.html',
  styleUrls: ['./edit-education-tab.component.scss']
})
export class EditEducationTabComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.onChange.next(true);
  }

}
