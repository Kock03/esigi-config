import { Component, EventEmitter, Inject, Input, Output, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-language-dialog',
  templateUrl: './edit-language-dialog.component.html',
  styleUrls: ['./edit-education-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class EditLanguageDialog {
  @Input('form') collaboratorForm!: FormGroup;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  languageForm!: FormGroup;
  collaboratorId!: string | null;
  languageId!: string | null;

  constructor(
    public dialogRef: MatDialogRef<EditLanguageDialog>,
    private fb: FormBuilder,
    // private collaboratorLanguageProvider: CollaboratorLanguageProvider,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    //this.collaboratorId = sessionStorage.getItem('collaborator_id')!;
    this.initForm();
  }

  initForm(): void {
    this.languageForm = this.fb.group({
      languageName: [null, [Validators.required, Validators.maxLength(40)]],
      degreeOfInfluence: [null, Validators.required],
      Collaborator: { id: this.collaboratorId },
    });
    if (this.data) {
      this.languageForm.patchValue(this.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
    sessionStorage.removeItem('language_id');
    sessionStorage.removeItem('method');
  }

  async save() {
    // const data = this.languageForm.getRawValue();
    // if (this.method === 'add') {
    //   try {
    //     const language = await this.collaboratorLanguageProvider.store(data);
    //     sessionStorage.setItem('language_id', language.id);
    //   } catch (error: any) {
    //     console.log('ERROR 132' + error);
    //   }
    // }
    // if (this.method === 'edit') {
    //   try {
    //     this.languageId = sessionStorage.getItem('language_id');
    //     const updateLanguage = await this.collaboratorLanguageProvider.update(
    //       this.languageId,
    //       data
    //     );
    //   } catch (error: any) {
    //     console.log('ERROR 132' + error);
    //   }
    // }
  }
  close() {
    this.dialogRef.close();
    sessionStorage.clear;
  }
}