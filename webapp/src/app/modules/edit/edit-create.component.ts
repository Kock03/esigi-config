import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentValidator } from 'src/app/validators/document.validator';

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditCreateComponent implements OnInit {

  collaboratorForm!: FormGroup;
  userForm!: FormGroup;
  step: any = 1;
  validations = [

  ];

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm();
  }

  handleChanges(value: any): void { }

  handleStep(number: number): void {
    this.step = number;

  }

  initForm() {
    this.collaboratorForm = this.fb.group({
      firstNameCorporateName: [null, Validators.required],
      lastNameFantasyName: [null, Validators.required],
      cpf: this.fb.control({ value: null, disabled: false }, [
        DocumentValidator.isValidCpf(),
      ]),
      birthDate: [null, Validators.required],
      login: [null, Validators.required],
    });

    this.userForm = this.fb.group({
      currentPassword: [null, Validators.required],
      newPassword: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    })
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
