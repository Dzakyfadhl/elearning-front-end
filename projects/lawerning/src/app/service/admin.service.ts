import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Constants from '../constants/constant';
import { DashboardAdminResponse } from '../model/admin/dashboard-admin-response';
import { ResponseModel } from '../model/response-model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getDashboard(): Promise<ResponseModel<DashboardAdminResponse>> {
    return this.http
      .get<ResponseModel<DashboardAdminResponse>>(
        `${Constants.BASE_URL}/admin/dashboard`
      )
      .toPromise();
  }
}
