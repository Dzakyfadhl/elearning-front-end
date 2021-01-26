import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrls: ['./courses-student.component.css']
})
export class CoursesStudentComponent implements OnInit {

  course : any = {};

  courses:any = [
    {
      name: 'Object Oriented Programming',
      role: 'teacher',
      status: '1',
      teacher: 'Ryan Rivaldo, S.Kom.'
    },
    {
      name: 'Database MySQL',
      role: 'teacher',
      status: '1',
      teacher: 'Dzaky Fadilah, S.Kom.'
    },
    {
      name: 'Java Framework',
      role: 'teacher',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.'
    },
    {
      name: 'Java Framework',
      role: 'teacher',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.'
    }
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  viewModule(index : number){
    let tempCourse: any= this.courses[index];
    let course = tempCourse.name;
    console.log(course);
    this.route.navigateByUrl(`/module-course/${course}`);
  }

}
