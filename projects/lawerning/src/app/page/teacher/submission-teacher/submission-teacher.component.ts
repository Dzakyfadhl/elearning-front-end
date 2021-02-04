import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionsByExamResponseDTO } from '../../../model/exam-dto/submissions-exam-response';
import { ExamService } from '../../../service/exam.service';

@Component({
  selector: 'app-submission-teacher',
  templateUrl: './submission-teacher.component.html',
  styleUrls: ['./submission-teacher.component.css'],
})
export class SubmissionTeacherComponent implements OnInit {
  examSelected: any;

  studentSubmission: SubmissionsByExamResponseDTO[];

  examStudent: {
    code: string;
    name: string;
    date: string;
    file: string;
    grade: string;
  }[];
  display: boolean = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((value) => {
      console.log(value.examId);
      this.examService.getExamSubmission(value.examId).subscribe((value) => {
        this.studentSubmission = value.result;
        console.log(this.studentSubmission);
      });
    });

    this.examStudent = [
      {
        code: 'ST01',
        name: 'Moch Apri',
        date: '29 Jan 2021 09:00',
        file: 'file.pdf',
        grade: '0',
      },
      {
        code: 'ST02',
        name: 'Farrel Yuda Praditya',
        date: '29 Jan 2021 09:15',
        file: 'file.pdf',
        grade: '80',
      },
      {
        code: 'ST03',
        name: 'Dzaky Fadilah',
        date: '29 Jan 2021 09:00',
        file: 'file.pdf',
        grade: '90',
      },
    ];
  }

  showDialog() {
    this.display = true;
  }
}
