import { Component, OnInit } from '@angular/core';

interface Teacher {
  code:string;
  name:string;
  phone:string;
  username:string;
}

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent implements OnInit {
  listTeachers:Teacher[];
  
  first = 0;
  
  rows = 5;
  
  constructor() { }
  ngOnInit(): void {
    this.defineTeachers();

  }

  defineTeachers(){
    this.listTeachers = [
      {
        code : "TCH001",
        name : "Ryan Rivaldo",
        phone : "081211001122",
        username : "ryanriv"
      },
      {
        code : "TCH002",
        name : "Moch Apry",
        phone : "081211001133",
        username : "aprydevon"
      },
      {
        code : "TCH003",
        name : "Farel Johar",
        phone : "081211001144",
        username : "fareljoh"
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
