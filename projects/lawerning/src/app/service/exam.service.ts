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
import { ExamStudentResponse } from '../model/exam-dto/exam-student-response';
import { ExamTeacherRequest } from '../model/exam-dto/exam-teacher-request';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAverageScore(
    id: string
  ): Observable<ResponseModel<ScoreAverageResponseDTO[]>> {
    return this.http.get<ResponseModel<ScoreAverageResponseDTO[]>>(
      `${Constants.BASE_URL}/exam/average-scores/student/${id}`
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
      `${Constants.BASE_URL}/exam/${id}/submission`
    );
  }

  updateScore(data: UpdateScoreRequestDTO): Observable<any> {
    return this.http.put<UpdateScoreRequestDTO>(
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

  getExamStudent(
    examId: string
  ): Observable<ResponseModel<ExamStudentResponse>> {
    return this.http.get<ResponseModel<ExamStudentResponse>>(
      `${Constants.BASE_URL}/exam/${examId}/submission/${
        this.authService.getLoginResponse().userRoleId
      }`
    );
  }

  uploadExamTeacher(formData: FormData): Observable<any> {
    return this.http.post<any>(`${Constants.BASE_URL}/exam/module`, formData);
  }

  deleteExamTeacher(id: string): Observable<ResponseModel<string>> {
    return this.http.delete<ResponseModel<string>>(
      `${Constants.BASE_URL}/exam/id/${id}`
    );
  }

  deleteExamStudent(id: string): Observable<ResponseModel<string>> {
    return this.http.delete<ResponseModel<string>>(
      `${Constants.BASE_URL}/exam/submission/${id}`
    );
  }
}
