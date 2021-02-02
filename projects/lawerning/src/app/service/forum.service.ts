import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumModuleResponseDTO } from '../model/forum-dto/forum-module-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getModuleDiscussions(id:string): Observable<ResponseModel<ForumModuleResponseDTO[]>> {
    return this.http.get<ResponseModel<ForumModuleResponseDTO[]>>(`http://192.168.13.87:8080/forum/module/${id}`,
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

  saveForum(data:ForumRequestDTO): Observable<ForumRequestDTO> {
    return this.http.post<ForumRequestDTO>(`http://192.168.13.87:8080/forum`, data,
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

  deleteDiscussion(id:string, userId:string): Observable<any> {
    return this.http.delete<any>(`http://192.168.13.87:8080/forum?id=${id}&userId=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

}
