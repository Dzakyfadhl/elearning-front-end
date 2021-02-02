import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseStudentTeacherResponse } from '../model/course-student-teacher-response';
import { ResponseModel } from '../model/response-model';

@Injectable({
  providedIn: 'root',
})
export class StudentCourseTeacherService {
  // baseUrl = 'http://192.168.13.87:8080/';
  constructor(private http: HttpClient) {}

  // getStudentCourseTeacher(): Observable<ResponseModel<CourseStudentTeacherResponse>>{
  //   return this.http.get<ResponseModel<CourseStudentTeacherResponse>>(`this.baseUrl/${this.}/students`)
  // }
}
