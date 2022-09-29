import { Input, Output, EventEmitter, Inject, Component, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-edit-skill-dialog',
    templateUrl: './edit-skill-dialog.component.html',
    encapsulation: ViewEncapsulation.None,

})
export class EditSkillDialog {
    @Input('form') collaboratorForm!: FormGroup;
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    skillForm!: FormGroup;
    method!: string;
    collaboratorId!: string | null;
    skillId!: string | null;

    constructor(
        public dialogRef: MatDialogRef<EditSkillDialog>,
        private fb: FormBuilder,
        //private collaboratorSkillProvider: CollaboratorSkillProvider,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        // this.method = sessionStorage.getItem('method')!;
        // this.collaboratorId = sessionStorage.getItem('collaboratorId')!;
        this.initForm();
    }

    initForm(): void {
        this.skillForm = this.fb.group({
            technology: [null, [Validators.required, Validators.maxLength(50)]],
            seniority: [null, Validators.required],
            yearsExperience: [null, [Validators.required, Validators.maxLength(2)]],
            currentPosition: [false, Validators.required],
            Collaborator: { id: this.collaboratorId },
        });
        if (this.data) {
            this.skillForm.patchValue(this.data);
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    async save() {

        // try {
        //   const skill = await this.collaboratorSkillProvider.store(data);
        //   sessionStorage.setItem('skill_id', skill.id);
        // } catch (error: any) {
        //   console.log('ERROR 132' + error);
        // }
    }

    close() {
        this.dialogRef.close();
        sessionStorage.clear;
    }
}