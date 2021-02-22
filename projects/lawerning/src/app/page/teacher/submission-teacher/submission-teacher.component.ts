import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionsByExamResponseDTO } from '../../../model/exam-dto/submissions-exam-response';
import { UpdateScoreRequestDTO } from '../../../model/exam-dto/update-score-request';
import { AuthService } from '../../../service/auth.service';
import { ExamService } from '../../../service/exam.service';

@Component({
  selector: 'app-submission-teacher',
  templateUrl: './submission-teacher.component.html',
  styleUrls: ['./submission-teacher.component.css'],
})
export class SubmissionTeacherComponent implements OnInit {
  examSelected: any;
  tempFirstName: string;
  tempLastName: string;
  score: number;
  firstName: string;
  lastName: string;
  examTitle: string;
  data = new UpdateScoreRequestDTO();
  studentSubmission: SubmissionsByExamResponseDTO[];

  display: boolean = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private examService: ExamService,
    private authService: AuthService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.showExamSubmission();
  }

  showExamSubmission() {
    this.activeRoute.queryParams.subscribe((value) => {
      this.examTitle = value.title;

      this.firstName = this.authService.getLoginResponse().firstName;
      this.lastName = this.authService.getLoginResponse().lastName;
      this.examService.getExamSubmission(value.idExam).subscribe((value) => {
        this.studentSubmission = value.result;
      });
    });
  }
  showDialog(index: number) {
    let tempObj = this.studentSubmission[index];
    this.tempFirstName = tempObj.firstName;
    this.tempLastName = tempObj.lastName;
    this.data.id = tempObj.id;
    this.data.updatedBy = this.authService.getLoginResponse().userId;
    this.display = true;
  }
  prevPage() {
    this.location.back();
  }

  updateScore() {
    this.data.grade = this.score;

    this.examService.updateScore(this.data).subscribe((value) => {
      this.showExamSubmission();
    });
    this.display = false;
  }
}
