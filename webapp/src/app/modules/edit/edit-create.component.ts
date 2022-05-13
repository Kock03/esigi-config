import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditCreateComponent implements OnInit {

  step: any = 1;
  validations = [

  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleChanges(value: any): void { }

  handleStep(number: number): void {
    if (this.step < number) {
      //this.snackbarService.showAlert('Verifique os campos');
    } else if (this.step - number < 1) {
      this.step = number;
    } else {
      this.step = number;
    }
  }

  navigate(direction: string) {
    if (this.step > 1 && direction === 'back') {
      this.step -= 1;
    } else if (this.step < 8 && direction === 'next') {
      this.step += 1;
    } else {
      //this.snackbarService.showAlert('Verifique os campos');
    }
  }

}
