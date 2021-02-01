import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.css']
})
export class HomeTeacherComponent implements OnInit {

  courses: {
    title: string
    startDate: string,
    endDate: string,
    description: string
  }[]
  constructor() {
    
  }

  ngOnInit(): void {
    this.courses =
    [
      {
        title: "Object Oriented Programming",
        startDate: "21 Jan 2021",
        endDate: "28 Jan 2021",
        description: `Belajar programming menggunakan bahasa C 
      yang menjadi populer dikarenakan cepat dan 
      mudah untuk dipelajari bagi para pemula.`
      },
      {
        title: "Object Oriented Programming",
        startDate: "21 Jan 2021",
        endDate: "28 Jan 2021",
        description: `Belajar programming menggunakan bahasa C 
      yang menjadi populer dikarenakan cepat dan 
      mudah untuk dipelajari bagi para pemula.`
      },
      {
        title: "Object Oriented Programming",
        startDate: "21 Jan 2021",
        endDate: "28 Jan 2021",
        description: `Belajar programming menggunakan bahasa C 
      yang menjadi populer dikarenakan cepat dan 
      mudah untuk dipelajari bagi para pemula.`
      },
      {
        title: "Object Oriented Programming",
        startDate: "21 Jan 2021",
        endDate: "28 Jan 2021",
        description: `Belajar programming menggunakan bahasa C 
      yang menjadi populer dikarenakan cepat dan 
      mudah untuk dipelajari bagi para pemula.`
      },
      {
        title: "Object Oriented Programming",
        startDate: "21 Jan 2021",
        endDate: "28 Jan 2021",
        description: `Belajar programming menggunakan bahasa C 
      yang menjadi populer dikarenakan cepat dan 
      mudah untuk dipelajari bagi para pemula.`
      },
      {
        title: "Object Oriented Programming",
        startDate: "21 Jan 2021",
        endDate: "28 Jan 2021",
        description: `Belajar programming menggunakan bahasa C 
      yang menjadi populer dikarenakan cepat dan 
      mudah untuk dipelajari bagi para pemula.`
      }
    ]
  }
}
