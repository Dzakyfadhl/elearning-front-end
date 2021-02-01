import { Component, OnInit } from '@angular/core';
import { TeacherForAdminDTO } from '../../../model/teacher-dto/teacher-admin-dto';
import { AuthService } from '../../../service/auth.service';
import { TeacherService } from '../../../service/teacher.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent implements OnInit {
  listTeachers:TeacherForAdminDTO[];
  
  first = 0;
  
  rows = 5;
  
  constructor(private authService:AuthService, private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.defineTeachers();
  }

  defineTeachers(){
    this.teacherService.getAllTeachersForAdmin().subscribe(val=>{
      this.listTeachers = val.result;
      console.log(this.listTeachers);
    },
    err=>{

    });
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
