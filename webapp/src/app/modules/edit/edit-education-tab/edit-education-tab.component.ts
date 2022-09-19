import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ConfirmDialogService } from 'src/services/confirn-dialog.service';
import { SnackBarService } from 'src/services/snackbar.service';
import { EditEducationDialog } from './edit-education-dialog.component';
import { EditLanguageDialog } from './edit-language-dialog.component';


@Component({
  selector: 'app-edit-education-tab',
  templateUrl: './edit-education-tab.component.html',
  styleUrls: ['./edit-education-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditEducationTabComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('languageTable') languageTable!: MatTable<any>;
  @ViewChild('educationTable') educationTable!: MatTable<any>;

  dataLanguage: [] = [];

  dataEducation: [] = [];

  displayedEducation: string[] = [
    'schooling',
    'situation',
    'course',
    'institution',
    'icon',
  ];

  displayedLanguage: string[] = ['language', 'fluency', 'icon'];

  selectedIndex: number = 0;

  educationForm!: FormGroup;
  languageForm!: FormGroup;

  index: any = null;
  Language: any;
  Education: any;
  collaboratorId!: any;
  languageId!: string;
  educationId!: string;

  constructor(
    // private dialogService: ConfirmDialogService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    //private collaboratorProvider: CollaboratorProvider,
    private snackbarService: SnackBarService,
    //private collaboratorLanguageProvider: CollaboratorLanguageProvider,
    //private collaboratorEducationProvider: CollaboratorEducationProvider

  ) { }

  ngOnInit(): void {
    this.getEducationsList();
    this.getLanguagesList();

  }


  async getEducationsList() {
    // this.collaboratorId = sessionStorage.getItem('collaborator_id');
    // const data = await this.collaboratorProvider.findOne(this.collaboratorId);
    // this.dataEducation = data.Educations;
  }


  async getLanguagesList() {
    // this.collaboratorId = sessionStorage.getItem('collaborator_id');
    // const data = await this.collaboratorProvider.findOne(this.collaboratorId);
    // this.dataLanguage = data.Languages;
  }



  openDialogLanguage() {

    const dialogRef = this.dialog.open(EditLanguageDialog, {
      width: '500px',
      height: '320px',
    });

    dialogRef.afterClosed().subscribe(language => {
      if (language) {
        this.getLanguagesList();
      }
    });
  }

  openDialogEducation() {
    const dialogRef = this.dialog.open(EditEducationDialog, {
      width: '500px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(education => {
      if (education) {
        this.getEducationsList();
      }
    });
  }

  next() {
    this.onChange.next(true);
  }

  getLanguage(languageSelected: any, id: string) {
    this.languageId = id;
    sessionStorage.setItem('language_id', this.languageId);
    const dialogRef = this.dialog.open(EditLanguageDialog, {
      width: '500px',
      height: '320px',
      data: languageSelected,
    });

    dialogRef.afterClosed().subscribe(language => {
      if (language) {
        this.getLanguagesList();
      }
    });
  }

  deleteLanguage(id: string) {
    // const options = {
    //   data: {
    //     title: 'Atenção',
    //     subtitle: 'Você tem certeza que deseja excluir essas informações?',
    //   },
    //   panelClass: 'confirm-modal',
    // };

    // this.dialogService.open(options);

    // this.dialogService.confirmed().subscribe(async confirmed => {
    //   if (confirmed) {
    //     try {
    //       let deleteLanguage = await this.collaboratorLanguageProvider.destroy(id);
    //       this.getLanguagesList();

    //       this.snackbarService.successMessage('Registro Excluido Com Sucesso');
    //     } catch (error) {
    //       console.log('ERROR 132' + error);
    //       this.snackbarService.showError('Falha ao Excluir');
    //     }
    //   }
    // });
  }

  getEducation(educationSelected: any, id: string) {
    this.educationId = id;
    sessionStorage.setItem('education_id', this.educationId);
    const dialogRef = this.dialog.open(EditEducationDialog, {
      width: '500px',
      height: '400px',
      data: educationSelected,
    });
    dialogRef.afterClosed().subscribe(education => {
      if (education) {
        this.getEducationsList();
      }
    });
  }

  deleteEducation(id: string) {
    // const options = {
    //   data: {
    //     title: 'Atenção',
    //     subtitle: 'Você tem certeza que deseja excluir essas informações?',
    //   },
    //   panelClass: 'confirm-modal',
    // };

    // this.dialogService.open(options);

    // this.dialogService.confirmed().subscribe(async confirmed => {
    //   if (confirmed) {
    //     try {
    //       let deleteEducation = await this.collaboratorEducationProvider.destroy(id);
    //       this.getEducationsList();

    //       this.snackbarService.successMessage('Registro Excluido Com Sucesso');
    //     } catch (error) {
    //       console.log('ERROR 132' + error);
    //       this.snackbarService.showError('Falha ao Excluir');
    //     }
    //   }
    // });
  }

  getLabel(label: string, element: any) {
    if (!element) {
      return;
    }
    switch (label) {
      case 'schooling':
        return element.schooling == 1
          ? 'Ensino Fundamental'
          : element.schooling == 2
            ? 'Ensino Médio'
            : 'Ensino Superior';
      case 'situation': {
        return element.situation == 1
          ? 'Parado'
          : element.situation == 2
            ? 'Completo'
            : 'Em andamento';
      }
      default:
        return;
    }
  }
}
