import { Component, OnInit } from '@angular/core';

interface Subject {
  code:string;
  name:string;
  description:string;
}

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.css']
})
export class AdminSubjectComponent implements OnInit {

  listSubjects:Subject[];
  
  first = 0;
  
  rows = 5;
  
  constructor() { }
  ngOnInit(): void {
    this.defineSubjects();

  }

  defineSubjects(){
    this.listSubjects = [
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
      },
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
      },
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
      },
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
      },
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
      },
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
      },
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
      },
      {
        code : "S001",
        name : "JAVA",
        description : "Study Java Programming"
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
