import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent implements OnInit {

  dateStart: Date;
  dateEnd: Date;

  experiences = [
    {
      title: 'Universitas Brawijaya',
      job: 'Lecturer',
      difference: 'Jul 2020 - Apr 2021'
    },
    {
      title: 'Build With Angga',
      job: 'Front End Mentoring',
      difference: 'Jan 2021 - Apr 2021'
    }
  ]
  isDisplay = false;
  
  isDisplayEx = false;
  blockedDocument: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showDialogEx(){
    this.isDisplayEx = true;
    this.blockedDocument = true;
    console.log(this.dateStart);
  }
  cancelDialogEx(){
    this.isDisplayEx = false;
    this.blockedDocument = false;

  }
  showDialog() {
    this.isDisplay = true;
    this.blockedDocument = true;
  }
  cancelDialog(){
    this.blockedDocument=false;
    this.isDisplay = false;
  }

}
