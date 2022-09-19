
import { Component, Input, Output, EventEmitter, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ConfirmDialogService } from 'src/services/confirn-dialog.service';
import { SnackBarService } from 'src/services/snackbar.service';
import { EditSkillDialog } from './edit-skill-dialog-component';


@Component({
  selector: 'app-edit-skill-tab',
  templateUrl: './edit-skill-tab.component.html',
  styleUrls: ['./edit-skill-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class EditSkillTabComponent {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('skillTable') skillTable!: MatTable<any>;

  displayedColumns: string[] = ['technology', 'time', 'level', 'icon'];

  data: [] = [];

  selectedIndex: number = 0;
  skillForm!: FormGroup;
  Skill: any;
  checked = false;
  method!: string;
  collaboratorId!: any;
  skillId!: string;
  collaboratorMethod!: string;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    //private collaboratorSkillProvider: CollaboratorSkillProvider, 
    //private dialogService: ConfirmDialogService,
    private snackbarService: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.getSkillList();

  }

  async getSkillList() {
    // const data = await this.collaboratorProvider.findOne(this.collaboratorId);
    // this.data = data.Skills;
  }



  openDialog() {
    this.method = 'add';
    sessionStorage.setItem('method', this.method);
    const dialogRef = this.dialog.open(EditSkillDialog, {
      width: '500px',
      height: '540px',
    });

    dialogRef.afterClosed().subscribe(skill => {
      if (skill) {
        this.getSkillList()
      }
    });
  }

  next() {
    this.onChange.next(true);
  }

  getSkill(skillSelected: any, id: string) {
    this.method = 'edit';
    sessionStorage.setItem('method', this.method);
    this.skillId = id;
    sessionStorage.setItem('skill_id', this.skillId);
    const dialogRef = this.dialog.open(EditSkillDialog, {
      width: '500px',
      height: '540px',
      data: skillSelected,
    });
    dialogRef.afterClosed().subscribe(skill => {
      if (skill) {
        this.getSkillList();
      }
    });
  }

  deleteSkill(id: string) {
    // const options = {
    //   data: {
    //     title: 'Atenção',
    //     subtitle: 'Você tem certeza que deseja excluir esta Skill?',
    //   },
    //   panelClass: 'confirm-modal',
    // };

    // this.dialogService.open(options);

    // this.dialogService.confirmed().subscribe(async (confirmed) => {
    //   if (confirmed) {
    //     try {
    //       // let deleteSkill = await this.collaboratorSkillProvider.destroy(id);
    //       this.getSkillList();
    //       this.snackbarService.successMessage('Registro Excluido Com Sucesso');
    //     } catch (error) {
    //       console.log('ERROR 132' + error);
    //       this.snackbarService.showError('Falha ao Excluir');
    //     }
    //   }
    // });
  }

}



