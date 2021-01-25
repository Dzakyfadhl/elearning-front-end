import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css']
})
export class ModuleDetailComponent implements OnInit {
  title: string;
  baseUrl = 'http://192.168.13.87:8080/file';

  formData: FormData;
  header : HttpHeaders;
  file: string;
  exams = [
    {
      title: 'Migration JDBC',
      type: 'Quiz',
      deadline: '29/01/2021 - 21:00',
      exam: 'quiz-jdbc.pdf',
      feedback: 'quiz-jdbc-mochapry.pdf'
    },
    {
      title: 'Design Table',
      type: 'Quiz',
      deadline: '29/01/2021 - 20:00',
      exam: 'quiz-table.pdf',
      feedback: 'quiz-table-mochapry.pdf'
    },
    {
      title: 'Define Class Interface',
      type: 'Exam',
      deadline: '29/01/2021 - 21:00',
      exam: 'exam-class-interface.pdf',
      feedback: ''
    }

  ];

  messages = [
    {
      image: './assets/images/male1.jpeg',
      nama: 'Mochamad Apry',
      time: '30/01/2020 - 12:30',
      message: 'Hi mom, i wanna sending my attachment',
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
  isEmpty : boolean = false;
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${this.baseUrl}/9ff7eae6-244a-418e-bcce-3f4002835174`)
    this.activeRoute.params.subscribe(value =>{
      this.title = value.title
      console.log(this.title);
    });

    if(this.exams.length == 0 || this.exams == undefined){
      this.isEmpty = true;
    }

  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
         let file: File = fileList[0];
         console.log(file);
        let data: FormData = new FormData();
        data.append('file', file);
        this.formData = data;
        this.file =file.name;
    
    }
  }

  upload(){
    this.http.post(`${this.baseUrl}`, this.formData).subscribe(value=>{
      console.log(value);
    });
   
  }

}
