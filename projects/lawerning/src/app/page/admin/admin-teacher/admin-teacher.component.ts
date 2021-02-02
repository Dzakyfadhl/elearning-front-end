import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TeacherForAdminDTO } from '../../../model/teacher-dto/teacher-admin-dto';
import { AuthService } from '../../../service/auth.service';
import { TeacherService } from '../../../service/teacher.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css'],
})
export class AdminTeacherComponent implements OnInit {
  modalDialog: boolean;

  teachers: TeacherForAdminDTO[];
  teacher: TeacherForAdminDTO;

  selectedTeachers: TeacherForAdminDTO[];

  submitted: boolean;

  statuses: any[];
  constructor(
    private authService: AuthService,
    private teacherService: TeacherService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.defineTeachers();
  }

  defineTeachers() {
    this.teacherService.getAllTeachersForAdmin().subscribe(
      (val) => {
        this.teachers = val.result;
        console.log(this.teachers);
      },
      (err) => {
        console.error(err.error);
      }
    );
  }
  
  openNew() {
    this.teacher = new TeacherForAdminDTO();
    this.submitted = false;
    this.modalDialog = true;
  }

  deleteSelectedTeachers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected teachers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teachers = this.teachers.filter(
          (val) => !this.selectedTeachers.includes(val)
        );
        this.selectedTeachers = null;
        alert('Teachers Deleted');
      },
    });
  }

  editTeacher(teacher: TeacherForAdminDTO) {
    this.teacher = { ...teacher };
    this.modalDialog = true;
  }

  deleteTeacher(teacher: TeacherForAdminDTO) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + teacher.firstName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.teachers = this.teachers.filter(val => val.id !== teacher.id);
          this.teacher = new TeacherForAdminDTO();
          alert('Teacher Deleted');
      }
  });
  }

  saveTeacher() {
    this.submitted = true;
  }

  hideDialog() {
    this.modalDialog = false;
    this.submitted = false;
  }
}
