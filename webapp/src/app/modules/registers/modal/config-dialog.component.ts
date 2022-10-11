
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { ConfigProvider } from 'src/providers/config.provider';
import { ConfirmDialogService } from 'src/services/confirn-dialog.service';
import { ErrorStateMatcherService } from 'src/services/error.state.matcher.service';
import { SnackBarService } from 'src/services/snackbar.service';

@Component({
    selector: 'app-config-dialog',
    templateUrl: './config-dialog.component.html',
    styleUrls: ['./config-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,

})
export class ConfigDialogComponent implements OnInit {
    configForm!: FormGroup;
    dataTable!: [];

    displayedColumns: string[] = ['name', 'icon'];
    context!: string;
    title!: string;
    key!: string;
    id!: string;
    method!: string;

    matcher = new ErrorStateMatcherService();

    constructor(
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ConfigDialogComponent>,
        public translateService: TranslateService,
        private configProvider: ConfigProvider,
        private snackbarService: SnackBarService,

    ) { }

    ngOnInit(): void {
        this.title = this.data.title;
        this.context = this.data.context;
        this.key = this.data.key;

        this.initForm();
        this.getData();



    }

    initForm() {
        this.configForm = this.fb.group({
            key: this.key,
            value: ['', Validators.required],

        });
    }

    async getData() {
        this.dataTable = await this.configProvider.findAll(this.context, this.key);

    }


    async submit() {
        let data = this.configForm.getRawValue();
        this.initForm();
        this.getData();

        if (this.method === 'edit') {
            try {
                await this.configProvider.update(this.context, this.id, data);
                this.method = '';
                this.initForm();
                this.getData();
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                await this.configProvider.store(this.context, data);
                this.initForm();
                this.getData();
            } catch (error: any) {
                console.log('ERROR 132' + error);
            }
        }
        this.method = '';
    }

    async getRegisters(registerSelected: any, id: string) {
        this.configForm.patchValue(registerSelected);
        this.id = id;
        this.method = 'edit';
    }


    close() {
        this.dialogRef.close();
    }

    clear() {
        this.initForm();
    }

    async delete(id: string) {

        try {
            await this.configProvider.destroy(this.context, id);
            this.initForm();
            this.getData();
            this.snackbarService.successMessage('Registro excluido com sucesso');
        } catch (error) {
            console.log('ERROR 132' + error);
            this.snackbarService.showError('Falha ao excluir');
            this.getData();
        }
    }


}
