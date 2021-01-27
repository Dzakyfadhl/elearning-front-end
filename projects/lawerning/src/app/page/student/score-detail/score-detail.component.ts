import { Component, OnInit } from '@angular/core';
import { report } from 'process';

@Component({
  selector: 'app-score-detail',
  templateUrl: './score-detail.component.html',
  styleUrls: ['./score-detail.component.css']
})
export class ScoreDetailComponent implements OnInit {
  cols: any[];

  reports: any[] = [
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Exam',
      exam: 'Exam Spring Boot',
      date: '25 Jan 2020',
      score: '80'
    },
    {
      course: 'Java Framework',
      module: 'JDBC',
      examType: 'Quiz',
      exam: 'Quiz JDBC',
      date: '28 Jan 2020',
      score: '98'
    },
    {
      course: 'Java Framework',
      module: 'JDBC',
      examType: 'Exam',
      exam: 'Exam JDBC',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Database & Mysql',
      module: 'Aggregate Function',
      examType: 'Quiz',
      exam: 'Quiz Avg Sum Function',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    },
    {
      course: 'Java Framework',
      module: 'Spring Boot',
      examType: 'Quiz',
      exam: 'Quiz Spring Boot',
      date: '25 Jan 2020',
      score: '88'
    }
  ];

  first = 0;

  rows = 10;
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: 'course', header: 'Course'},
      {field: 'module', header: 'Module'},
      {field: 'examType', header: 'Exam Type'},
      {field: 'exam', header: 'Exam'},
      {field: 'date', header: 'Date'},
      {field: 'score', header: 'Score'}
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
  isLastPage(): boolean {
    return this.reports ? this.first === (this.reports.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.reports ? this.first === 0 : true;
}
}
