import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-teacher',
  templateUrl: './course-teacher.component.html',
  styleUrls: ['./course-teacher.component.css']
})
export class CourseTeacherComponent implements OnInit {
  
  // courses: {
  //   titleCourse: string,
  //   startDate: string,
  //   endDate: string,
  //   capacity: string,
  //   studentCount: string
  // }[]
  isEmpty = false;

  courses = [
    {
      titleCourse: "Object Oriented Programming",
      startDate: "20 Jan 2021",
      endDate: "28 Jan 2021",
      capacity: "20",
      studentCount: "12"
    },
    {
      titleCourse: "Database & SQL",
      startDate: "20 Jan 2021",
      endDate: "18 Jan 2022",
      capacity: "20",
      studentCount: "2"
    },
    {
      titleCourse: "Algorithm & Logical",
      startDate: "20 Jan 2021",
      endDate: "28 Jan 2021",
      capacity: "20",
      studentCount: "12"
    },
    {
      titleCourse: "Object Oriented Programming",
      startDate: "20 Jan 2021",
      endDate: "28 Jan 2021",
      capacity: "20",
      studentCount: "12"
    },
    {
      titleCourse: "Algorithm & Logical",
      startDate: "20 Jan 2021",
      endDate: "28 Jan 2021",
      capacity: "20",
      studentCount: "12"
    },
    {
      titleCourse: "Object Oriented Programming",
      startDate: "20 Jan 2021",
      endDate: "28 Jan 2021",
      capacity: "20",
      studentCount: "12"
    }
  ]
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    console.log(this.courses.length);
    if(this.courses.length == 0){
      this.isEmpty = true;
    }
  }

  viewModule(index: number){
    let tempCourses: any = this.courses[index]
    let courseName = tempCourses.titleCourse
    console.log(courseName);    
    this.router.navigateByUrl(`/list-module-teacher/${courseName}`);
  }
}
