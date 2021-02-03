import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { ResponseModel } from '../model/response-model';
import { ScheduleResponseDTO } from '../model/schedule-dto/schedule-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getScheduleByTeacherId(
    id: string
  ): Observable<ResponseModel<ScheduleResponseDTO[]>> {
    return this.http.get<ResponseModel<ScheduleResponseDTO[]>>(
      `${Constants.BASE_URL}/schedules/teacher/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }
}
