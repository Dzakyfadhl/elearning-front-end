import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamsModuleResponseDTO } from '../model/exam-dto/exams-module-response';
import { ResponseModel } from '../model/response-model';
import { ScoreAverageResponseDTO } from '../model/exam-dto/score-average-response';
import { SubmissionsByExamResponseDTO } from '../model/exam-dto/submissions-exam-response';
import { UpdateScoreRequestDTO } from '../model/exam-dto/update-score-request';
import { AuthService } from './auth.service';
import Constants from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAverageScore(
    id: string
  ): Observable<ResponseModel<ScoreAverageResponseDTO[]>> {
    return this.http.get<ResponseModel<ScoreAverageResponseDTO[]>>(
      `${Constants.BASE_URL}/exam/average-scores/student/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  getDetailModuleExam(
    id: string
  ): Observable<ResponseModel<ExamsModuleResponseDTO[]>> {
    return this.http.get<ResponseModel<ExamsModuleResponseDTO[]>>(
      `${Constants.BASE_URL}/exam/module/${id}`
    );
  }

  getExamSubmission(
    id: string
  ): Observable<ResponseModel<SubmissionsByExamResponseDTO[]>> {
    return this.http.get<ResponseModel<SubmissionsByExamResponseDTO[]>>(
      `${Constants.BASE_URL}/exam/${id}/submission`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  updateScore(data: UpdateScoreRequestDTO): Observable<any> {
    return this.http.patch<UpdateScoreRequestDTO>(
      `${Constants.BASE_URL}/exam/submission`,
      data
    );
  }

  uploadExamStudent(examId: string, formData: FormData): Observable<any> {
    return this.http.post<any>(
      `${Constants.BASE_URL}/exam/student?examId=${examId}&studentId=${
        this.authService.getLoginResponse().userRoleId
      }`,
      formData
    );
  }
}
