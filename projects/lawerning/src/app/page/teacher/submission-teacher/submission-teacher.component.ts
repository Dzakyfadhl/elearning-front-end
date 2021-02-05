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
  data = new UpdateScoreRequestDTO();
  studentSubmission: SubmissionsByExamResponseDTO[];

  display: boolean = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private examService: ExamService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.showExamSubmission();
  }

  showExamSubmission() {
    this.activeRoute.params.subscribe((value) => {
      console.log(value.examId);
      this.examService.getExamSubmission(value.examId).subscribe((value) => {
        this.studentSubmission = value.result;
        console.log(this.studentSubmission);
      });
    });
  }
  showDialog(index: number) {
    let tempObj = this.studentSubmission[index];
    this.tempFirstName = tempObj.firstName;
    this.tempLastName = tempObj.lastName;
    this.data.id = tempObj.id;
    this.data.updatedBy = this.auth.getLoginResponse().userId;
    console.log(this.data.updatedBy);
    console.log(this.data.id);

    this.display = true;
  }

  updateScore() {
    this.data.grade = this.score;
    console.log(this.data.grade);
    console.log(this.data.updatedBy);
    console.log(this.data.id);

    this.examService.updateScore(this.data).subscribe((value) => {
      console.log(value);
      this.showExamSubmission();
    });
    this.display = false;
  }
}
