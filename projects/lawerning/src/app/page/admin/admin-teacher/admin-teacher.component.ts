import { Component, OnInit } from '@angular/core';
import { TeacherForAdminDTO } from '../../../model/teacher-dto/teacher-admin-dto';
import { TeacherRequestDTO } from '../../../model/teacher-dto/teacher-request';
import { AuthService } from '../../../service/auth.service';
import { TeacherService } from '../../../service/teacher.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent implements OnInit {
  listTeachers: TeacherForAdminDTO[];

  displayModal: boolean;
  displayConfirmation: boolean;

  teacherInput = new TeacherRequestDTO();

  first = 0;

  rows = 5;

  constructor(private authService: AuthService, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.defineTeachers();
  }

  defineTeachers() {
    this.teacherService.getAllTeachersForAdmin().subscribe(val => {
      this.listTeachers = val.result;
      console.log(this.listTeachers);
    },
      err => {

      });
  }

  // showModalEdit(i: number) {
  //   this.codeVal = this.listCourseTypes[i].code;
  //   this.nameVal = this.listCourseTypes[i].name;


  //   this.displayModal = true;
  // }

  showModalCreate() {
    this.displayModal = true;
  }

  confirmDelete() {
    this.displayConfirmation = true;
  }



next() {
  this.first = this.first + this.rows;
}

prev() {
  this.first = this.first - this.rows;
}

reset() {
  this.first = 0;
}



}
