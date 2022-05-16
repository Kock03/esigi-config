import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-tab',
  templateUrl: './edit-tab.component.html',
  styleUrls: ['./edit-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditTabComponent implements OnInit {
  @Input('collaboratorForm') collaboratorForm!: FormGroup;
  @Input('userForm') userForm!: FormGroup;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  selectedFile: any;
  url: any;

  constructor() { }

  ngOnInit(): void {
    this.url =
      'https://st.depositphotos.com/1734074/4228/v/450/depositphotos_42286141-stock-illustration-vector-man-with-mustache-in.jpg';
  }

  fileChanged(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    reader.onload = _file => {
      this.url = reader.result;
      this.collaboratorForm.patchValue({
        photo: reader.result,
      });
    };
  }

  next() {
    this.onChange.next(true);
  }
}
