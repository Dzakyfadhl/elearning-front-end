import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {
  txtCourse: string;

  course : any = {};

  courseFiltering = [];
  selectedCourse: any;

  oneColumn: boolean = false;
  
  courses = [
    {
      name: 'Object Oriented Programming',
      role: 'teacher',
      category: 'TI',
      status: '1',
      teacher: 'Ryan Rivaldo, S.Kom.'
    },
    {
      name: 'Database MySQL',
      role: 'teacher',
      category: 'TI',
      status: '1',
      teacher: 'Mochamad Ray, S.Kom.'
    },
    {
      name: 'Java Framework',
      role: 'teacher',
      category: 'TI',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.'
    },
    {
      name: 'Creative Industry',
      role: 'teacher',
      category: 'MN',
      status: '2',
      teacher: 'Galih Galihum, S.E.'
    }
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
    if(this.selectedCourse == undefined){
      this.courseFiltering = this.courses;
    }
  }

  onChange(newValue){
      console.log(newValue);
      this.selectedCourse = newValue;
      if(this.selectedCourse == 'Select All'){
        this.courseFiltering = this.courses;
      }else{
        this.courseFiltering = this.courses.filter(value => value.category == this.selectedCourse);
        if(this.courseFiltering.length == 1){
          this.oneColumn = true;
        }
      }
  }

  viewModule(index : number){
    let tempCourse: any= this.courses[index];
    let course = tempCourse.name;
    console.log(course);
    this.route.navigate(['/module-available/',course]);
  }

}
