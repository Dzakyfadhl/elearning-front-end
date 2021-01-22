import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modif-admin-course',
  templateUrl: './modif-admin-course.component.html',
  styleUrls: ['./modif-admin-course.component.css']
})
export class ModifAdminCourseComponent implements OnInit {

  teacherSelector:string;

  date:string;

  constructor() { }
  
  ngOnInit(): void {
  }

  printDate(){
    console.log(this.date);
    
  }

}
