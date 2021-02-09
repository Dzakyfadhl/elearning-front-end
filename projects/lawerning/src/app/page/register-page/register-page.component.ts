import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gender } from '../../model/gender';
import { StudentRegisterRequest } from '../../model/student-register-request';
import { AuthService } from '../../service/auth.service';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  studentRegister = new StudentRegisterRequest();
  confirmPassword: string;
  male: string;
  female: string;
  constructor(
    private router: Router,
    private auth: AuthService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.male = Gender.MALE;
    this.female = Gender.FEMALE;
  }

  register() {
    console.log(this.studentRegister.gender);
    console.log(this.studentRegister.firstName);

    this.studentService.insertStudent(this.studentRegister).subscribe((val) => {
      console.log(val);
      this.router.navigateByUrl('/login');
    });
  }
}
