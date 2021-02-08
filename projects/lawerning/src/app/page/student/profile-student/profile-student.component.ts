import { Component, OnInit } from '@angular/core';
import { StudentResponse } from '../../../model/student/student-response';
import { AuthService } from '../../../service/auth.service';
import { ModuleService } from '../../../service/module.service';
import { StudentService } from '../../../service/student.service';
import { Gender } from '../../../model/gender';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css'],
})
export class ProfileStudentComponent implements OnInit {
  studentProfile = new StudentResponse();
  photo: any;

  result: any = [];

  isTwoRow: boolean = false;

  mymodules = [
    {
      course: 'Java Framework',
      value: 3,
      total: 11,
      score: '90',
    },
    {
      course: 'Object Oriented Programming',
      value: 10,
      total: 10,
      score: '90',
    },
    {
      course: 'PHP Framework',
      value: 11,
      total: 14,
      score: '90',
    },
    {
      course: 'Flutter',
      value: 18,
      total: 20,
      score: '90',
    },
  ];

  isDisplay = false;
  blockedDocument: boolean = false;

  constructor(
    private studentService: StudentService,
    private auth: AuthService,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.studentService.getProfile().subscribe((value) => {
      this.studentProfile = value.result;

      if (!this.studentProfile.idPhoto) {
        this.photo = `assets/images/default.png`;
      } else {
        this.photo = `http://192.168.15.224:8080/file/${this.studentProfile.idPhoto}`;
      }
    });

    this.mymodules.forEach((value) => {
      let percent = (value.value / value.total) * 100;

      this.result.push(Math.ceil(percent));
    });
    console.log(this.result);
  }

  showDialog() {
    this.isDisplay = true;
    this.blockedDocument = true;
  }
  cancelDialog() {
    this.blockedDocument = false;
    this.isDisplay = false;
  }
}
