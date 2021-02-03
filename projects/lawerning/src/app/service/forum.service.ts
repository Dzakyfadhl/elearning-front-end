import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { ForumModuleResponseDTO } from '../model/forum-dto/forum-module-response';
import { ForumRequestDTO } from '../model/forum-dto/forum-request';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getModuleDiscussions(
    id: string
  ): Observable<ResponseModel<ForumModuleResponseDTO[]>> {
    return this.http.get<ResponseModel<ForumModuleResponseDTO[]>>(
      `${Constants.BASE_URL}/forum/module/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  saveForum(data: ForumRequestDTO): Observable<ForumRequestDTO> {
    return this.http.post<ForumRequestDTO>(
      `${Constants.BASE_URL}/forum`,
      data,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  deleteDiscussion(id: string, userId: string): Observable<any> {
    return this.http.delete<any>(
      `${Constants.BASE_URL}/forum?id=${id}&userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }
}
