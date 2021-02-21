import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Constants from '../../../constants/constant';
import { DashboardAdminResponse } from '../../../model/admin/dashboard-admin-response';
import { DashboardCourseResponse } from '../../../model/admin/dashboard-course-response';
import { DashboardStudentResponse } from '../../../model/admin/dashboard-student-response';
import { DashboardTeacherResponse } from '../../../model/admin/dashboard-teacher-response';
import { AdminService } from '../../../service/admin.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
})
export class HomeAdminComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private toastService: ToastService
  ) {}

  dashboard: DashboardAdminResponse;

  studentData: any;
  studentChartOption: any;

  teacherData: any;
  teacherChartOption: any;

  courseData: any;
  courseChartOption: any;

  ngOnInit(): void {
    this.getDashboard();
  }

  async getDashboard() {
    const response = await this.adminService.getDashboard();
    if (response.code === 200) {
      this.dashboard = response.result;
      this.initStudentChart(this.dashboard.student);
      this.initTeacherChart(this.dashboard.teacher);
      this.initCourseChart(this.dashboard.course);
    }
  }

  initStudentChart(student: DashboardStudentResponse) {
    this.studentData = {
      labels: ['Active', 'Inactive', 'Male', 'Female', 'Verified'],
      datasets: [
        {
          data: [
            student.active,
            student.inactive,
            student.male,
            student.female,
            student.verified,
          ],
          backgroundColor: Constants.CHART_COLORS,
        },
      ],
    };
    this.studentChartOption = {
      title: {
        display: true,
        text: 'Student',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
  }

  initTeacherChart(teacher: DashboardTeacherResponse) {
    this.teacherData = {
      labels: ['Active', 'Inactive', 'Experienced', 'Male', 'Female'],
      datasets: [
        {
          data: [
            teacher.active,
            teacher.inactive,
            teacher.experienced,
            teacher.male,
            teacher.female,
          ],
          backgroundColor: Constants.CHART_COLORS,
        },
      ],
    };
    this.teacherChartOption = {
      title: {
        display: true,
        text: 'Teacher',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
  }

  initCourseChart(course: DashboardCourseResponse): void {
    this.courseData = {
      labels: [
        'Active',
        'Inactive',
        'Available',
        'Expired',
        'Registered Student',
        'Registered Teacher',
      ],
      datasets: [
        {
          data: [
            course.active,
            course.inactive,
            course.available,
            course.expired,
            course.registeredStudent,
            course.registeredTeacher,
          ],
          backgroundColor: Constants.CHART_COLORS,
        },
      ],
    };
    this.courseChartOption = {
      title: {
        display: true,
        text: 'Course',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
  }
}
