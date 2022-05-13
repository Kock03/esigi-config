import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-skill-tab',
  templateUrl: './edit-skill-tab.component.html',
  styleUrls: ['./edit-skill-tab.component.scss']
})
export class EditSkillTabComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.onChange.next(true);
  }

}
