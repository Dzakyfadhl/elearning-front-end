import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dtl-module',
  templateUrl: './dtl-module.component.html',
  styleUrls: ['./dtl-module.component.css']
})
export class DtlModuleComponent implements OnInit {
  moduleSelected: any;
  displayExam: boolean = false;
  displayModule: boolean = false;

  student: {
    code: string,
    name: string,
    attendanceDate: string,
    attendanceTime: string
  }[];

  exam: {
    title: string,
    type: string,
    deadline: string,
    description: string,
    file: string
  }[];

  examTypeSelected: string;

  examType:{
    name: string
  }[]

  date7: Date;
  blockedDocument: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { 
  }

  
  messages = [
    {
      image: './assets/images/male1.jpeg',
      nama: 'Mochamad Apry',
      time: '30/01/2020 - 12:30',
      message: 'Hi mom, i wanna sending my attachment lehehehehe hehaehea aeaenjea',
      role: 'Student'
    },
    {
      image: './assets/images/female.jpg',
      nama: 'Dinda Anisyah',
      time: '30/01/2020 - 12:32',
      message: 'Oh yeah, thats right bro.. ',
      role: 'Teacher'
    },
    {
      image: './assets/images/male1.jpeg',
      nama: 'Mochamad Apry',
      time: '30/01/2020 - 12:30',
      message: 'Hmm, thank u mom.',
      role: 'Student'
    }
    
  ]
  ngOnInit(): void {
    this.examType = [
      {
        name: "Quiz"
      },
      {
        name: "Exam"
      }
    ]
    this.exam = [
      {
        title: "Exam 1 OOP",
        type: "Exam",
        deadline: "29/01/2021 21:00",
        description: `this is exam 1 oop for student Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sint dolorem odit
        quisquam nulla perspiciatis!`,
        file: "exam1-oop.pdf"
      },
      {
        title: "Takehome OOP",
        type: "Takehome",
        deadline: "02/02/2021 23:59",
        description: `this is takehome oop for student Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sint dolorem odit
        quisquam nulla perspiciatis!`,
        file: "takehome-oop.pdf"
      },
      {
        title: "Exam 2 OOP",
        type: "Exam",
        deadline: "05/02/2021 23:59",
        description: `this is exam 2 oop for student Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sint dolorem odit
        quisquam nulla perspiciatis!`,
        file: "exam2-oop.pdf"
      }
    ]
    this.student = [
      {
        code: "ST01",
        name: "Moch Apri",
        attendanceDate: "22 Jan 2021",
        attendanceTime: "09:10"
      },
      {
        code: "ST02",
        name: "Galih Dika",
        attendanceDate: "22 Jan 2021",
        attendanceTime: "09:01"
      },
      {
        code: "ST03",
        name: "Dzaky Fadilah",
        attendanceDate: "22 Jan 2021",
        attendanceTime: "09:15"
      },
      {
        code: "ST04",
        name: "Dina Kastury",
        attendanceDate: "22 Jan 2021",
        attendanceTime: "09:10"
      }
    ]
    this.activeRoute.params.subscribe(value => {
      this.moduleSelected = value;
      console.log(this.moduleSelected);
    })
  }
  showDialogExam() {
    this.displayExam = true;
  }
  showDialogModule() {
    this.displayModule = true;
  }
  cancelDialog(){
    this.blockedDocument=false;
    this.displayExam = false;
  }

  viewModule(index : number){
    let tempExam: any= this.exam[index];
    let exam = tempExam.title;
    console.log(exam);
    this.router.navigateByUrl(`/submission-teacher/${exam}`);
  }
}
