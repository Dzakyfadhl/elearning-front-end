import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {

  courses = [
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
      name: 'Creative Industry',
      role: 'teacher',
      status: '2',
      teacher: 'Galih Galihum, S.E.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
