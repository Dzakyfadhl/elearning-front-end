import { Component, OnInit } from '@angular/core';

interface Student {
  code?: string;
  name?: string;
  phone?: string;
  email?: string;
  username?: string;
}

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {


  selectedStudents: Student[];


  statuses: any[];

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  listStudents: Student[];

  constructor() { }

  ngOnInit(): void {
    this.defineStudents();
  }

  defineStudents() {
    this.listStudents = [
      {
        code: "S001",
        name: "Atalya",
        phone: "081280810022",
        email: "atalya@gmail.com",
        username: "atalatal"
      },
      {
        code: "S002",
        name: "Alfi",
        phone: "081280810033",
        email: "alfi@gmail.com",
        username: "alfialfi"
      },
      {
        code: "S003",
        name: "Ibon",
        phone: "081280810044",
        email: "ibon@gmail.com",
        username: "ibontangsel"
      },
      {
        code: "S004",
        name: "Galih",
        phone: "081280810055",
        email: "galih@gmail.com",
        username: "galihom"
      },
    ]
  }

}
