import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  result : any= [
  ];

  mymodules = [
    {
      course: 'Java Framework',
      value: 3,
      total: 11,
      score: '90'
    },
    {
      course: 'Object Oriented Programming',
      value: 5,
      total: 10,
      score: '90'
    },
    {
      course: 'PHP Framework',
      value: 10,
      total: 10,
      score: '90'
    },
    {
      course: 'Flutter',
      value:  10,
      total: 20,
      score: '90'
    }
    
  ]
  constructor() { }

  ngOnInit(): void {
    this.mymodules.forEach(value =>{
      let percent = (value.value / value.total) * 100;
   
      this.result.push(Math.ceil(percent));
    });
    console.log(this.result);
    
  }

}
