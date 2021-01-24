import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Courses {
  code:string;
  type:string;
  category:string;
  start:string;
  end:string;
  status:string;
  capacity:number;
}

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {

  listCourses:Courses[];

  first = 0;

  rows = 5;

  constructor() { }

  ngOnInit(): void {
    this.defineCourses();
  }

  defineCourses(){
    this.listCourses = [
      {
        code : "C001",
        type : "Java Express",
        category : "Programming",
        start : "21-01-2021",
        end : "21-02-2021",
        status : "Regist",
        capacity : 40
      },
      {
        code : "C001",
        type : "Java Express",
        category : "Programming",
        start : "21-01-2021",
        end : "21-02-2021",
        status : "Regist",
        capacity : 40
      },
      {
        code : "C001",
        type : "Java Express",
        category : "Programming",
        start : "21-01-2021",
        end : "21-02-2021",
        status : "Regist",
        capacity : 40
      },
      {
        code : "C001",
        type : "Java Express",
        category : "Programming",
        start : "21-01-2021",
        end : "21-02-2021",
        status : "Regist",
        capacity : 40
      }
    ]
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
