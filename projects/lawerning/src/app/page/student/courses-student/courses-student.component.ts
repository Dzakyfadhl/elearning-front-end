import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrls: ['./courses-student.component.css']
})
export class CoursesStudentComponent implements OnInit {

  course : any = {};
  result: any =[];
  courses:any = [
    {
      name: 'Object Oriented Programming',
      category:'Programming',
      role: 'teacher',
      status: '1',
      teacher: 'Ryan Rivaldo, S.Kom.',
      value: 12,
      total: 20
    },
    {
      category:'Programming',
      name: 'Database MySQL',
      role: 'teacher',
      status: '1',
      teacher: 'Dzaky Fadilah, S.Kom.',
      value: 2,
      total: 20
    },
    {
      category:'Programming',
      name: 'Java Framework',
      role: 'teacher',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.',
      value: 10,
      total: 20
    },
    {
      category:'Business',
      name: 'Java Framework',
      role: 'teacher',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.',
      value: 12,
      total: 20
    }
    ,
    {
      category:'Programming',
      name: 'Java Framework',
      role: 'teacher',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.',
      value: 15,
      total: 20
    },
    {
      category:'Business',
      name: 'Java Framework',
      role: 'teacher',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.',
      value: 20,
      total: 20
    }
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
    
    this.courses.forEach(value =>{
      let percent = (value.value / value.total) * 100;
   
      this.result.push(Math.ceil(percent));
    });
    console.log(this.result);
  }
  viewModule(index : number){
    let tempCourse: any= this.courses[index];
    let course = tempCourse.name;
    console.log(course);
    this.route.navigateByUrl(`/module-course/${course}`);
  }

}
