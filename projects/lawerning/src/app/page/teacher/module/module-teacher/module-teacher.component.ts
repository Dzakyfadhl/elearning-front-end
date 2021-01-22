import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module-teacher',
  templateUrl: './module-teacher.component.html',
  styleUrls: ['./module-teacher.component.css']
})
export class ModuleTeacherComponent implements OnInit {

  course: any;
  module: {
    titleModule: string,
    startDate: string,
    startTime: string,
    endTime: string
  }[]

  student: {
    code: string,
    studentName: string,
    email: string,
    phoneNumber: string
  }[]

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.student = [
      {
        code: "ST01",
        studentName: "Moch Apri",
        email: "muhammadapry14@gmail.com",
        phoneNumber: "0897-7837-1331"
      },
      {
        code: "ST02",
        studentName: "Dzaky",
        email: "muhammadapry14@gmail.com",
        phoneNumber: "0897-7837-1331"
      },
      {
        code: "ST03",
        studentName: "William",
        email: "william14@gmail.com",
        phoneNumber: "0897-7837-1331"
      },
      {
        code: "ST04",
        studentName: "Anggi Alberto",
        email: "anggialberto14@gmail.com",
        phoneNumber: "0897-7837-1331"
      }
    ]
    this.module = [
      {
        titleModule: "Topics-1: Class & Object",
        startDate: "25 Jan 2021",
        startTime: "09:30",
        endTime: "12:30"
      },
      {
        titleModule: "Topics-2: Inheritance",
        startDate: "26 Jan 2021",
        startTime: "10:30",
        endTime: "12:30"
      },
      {
        titleModule: "Topics-3: Polimorphism",
        startDate: "27 Jan 2021",
        startTime: "09:30",
        endTime: "12:30"
      },
      {
        titleModule: "Topics-4: Interface",
        startDate: "28 Jan 2021",
        startTime: "09:30",
        endTime: "12:30"
      }
    ]
    this.activeRoute.params.subscribe(value => {
      this.course = value;
      console.log(this.course);
    })
  }

}
