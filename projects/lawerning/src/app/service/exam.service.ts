import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamsModuleResponseDTO } from '../model/exam-dto/exams-module-response';
import { ResponseModel } from '../model/response-model';
import { ScoreAverageResponseDTO } from '../model/exam-dto/score-average-response';
import { SubmissionsByExamResponseDTO } from '../model/exam-dto/submissions-exam-response';
import { UpdateScoreRequestDTO } from '../model/exam-dto/update-score-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAverageScore(id: string): Observable<ResponseModel<ScoreAverageResponseDTO[]>> {
    return this.http.get<ResponseModel<ScoreAverageResponseDTO[]>>(`http://192.168.13.87:8080/exam/average-scores/student/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      });
  }

  getDetailModuleExam(id: string): Observable<ResponseModel<ExamsModuleResponseDTO[]>> {
    return this.http.get<ResponseModel<ExamsModuleResponseDTO[]>>(`http://192.168.13.87:8080/exam//module/${id}`, 
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

  getExamSubmission(id: string): Observable<ResponseModel<SubmissionsByExamResponseDTO[]>> {
    return this.http.get<ResponseModel<SubmissionsByExamResponseDTO[]>>(`http://192.168.13.87:8080/exam/${id}/submission`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
      );
  }

  updateScore(data: UpdateScoreRequestDTO): Observable<any> {
    return this.http.patch<UpdateScoreRequestDTO>(`http://192.168.13.87:8080/exam/submission`, data,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      },
    );
  }
}
