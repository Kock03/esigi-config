import { Component, EventEmitter, Inject, Input, Output, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-edit-education-dialog',
    templateUrl: './edit-education-dialog.component.html',
    styleUrls: ['./edit-education-tab.component.scss'],
    encapsulation: ViewEncapsulation.None,

})
export class EditEducationDialog {
    @Input('form') collaboratorForm!: FormGroup;
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    educationForm!: FormGroup;
    method!: string;
    collaboratorId!: string | null;
    educationId!: string | null;

    constructor(
        public dialogRef: MatDialogRef<EditEducationDialog>,
        //   private collaboratorEducationProvider: CollaboratorEducationProvider,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.method = sessionStorage.getItem('method')!;
        this.collaboratorId = sessionStorage.getItem('collaborator_id')!;
        this.initForm();
    }

    initForm(): void {
        this.educationForm = this.fb.group({
            schooling: [null, Validators.required],
            situation: [null, Validators.required],
            course: [null, [Validators.required, Validators.maxLength(100)]],
            institution: [null, [Validators.required, Validators.maxLength(100)]],
            Collaborator: { id: this.collaboratorId },
        });
        if (this.data) {
            this.educationForm.patchValue(this.data);
        }
    }

    ngAfterViewInit(): void { }

    onNoClick(): void {
        this.dialogRef.close();
        sessionStorage.removeItem('education_id');
        sessionStorage.removeItem('method');
    }

    async save() {
        //   const data = this.educationForm.getRawValue();
        //   if (this.method === 'add') {
        //     try {
        //       const education = await this.collaboratorEducationProvider.store(data);
        //       sessionStorage.setItem('education_id', education.id);
        //     } catch (error: any) {
        //       console.log(error);
        //     }
        //   }
        //   if (this.method === 'edit') {
        //     try {
        //       this.educationId = sessionStorage.getItem('education_id');
        //       const updateEducation = await this.collaboratorEducationProvider.update(
        //         this.educationId,
        //         data
        //       );
        //     } catch (error: any) {
        //       console.log(error);
        //     }
        //   }
    }

    close() {
        this.dialogRef.close();
        sessionStorage.clear;
    }
}
