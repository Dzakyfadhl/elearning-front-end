import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modif-admin-subject',
  templateUrl: './modif-admin-subject.component.html',
  styleUrls: ['./modif-admin-subject.component.css']
})
export class ModifAdminSubjectComponent implements OnInit {

  teacherSelector:string;

  date:string;

  constructor() { }
  
  ngOnInit(): void {
  }

  printDate(){
    console.log(this.date);
    
  }

}
