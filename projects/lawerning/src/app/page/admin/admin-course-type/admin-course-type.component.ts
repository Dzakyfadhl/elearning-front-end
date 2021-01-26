import { Component, OnInit } from '@angular/core';

interface CourseType {
  code:string;
  name:string;
}

@Component({
  selector: 'app-admin-course-type',
  templateUrl: './admin-course-type.component.html',
  styleUrls: ['./admin-course-type.component.css']
})
export class AdminCourseTypeComponent implements OnInit {

  listCourseTypes:CourseType[];

  constructor() { }

  ngOnInit(): void {
    this.defineCourseType();
  }

  defineCourseType(){
    this.listCourseTypes = [
      {
        code: "CT001",
        name: "JAVA EXPRESS"
      },
      {
        code: "CT002",
        name: "JAVA REGULER"
      },
      {
        code: "CT003",
        name: "ANGULAR EXPRESS"
      },
      {
        code: "CT004",
        name: "ANGULAR REGULER"
      },
    ]
  }

}
