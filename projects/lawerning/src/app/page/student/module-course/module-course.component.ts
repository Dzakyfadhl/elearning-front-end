import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceRequest } from '../../../model/attendance-request';
import { DetailCourseResponse } from '../../../model/detail-course-response';
import { AttendanceService } from '../../../service/attendance.service';
import { AuthService } from '../../../service/auth.service';
import { ModuleService } from '../../../service/module.service';

@Component({
  selector: 'app-module-course',
  templateUrl: './module-course.component.html',
  styleUrls: ['./module-course.component.css'],
})
export class ModuleCourseComponent implements OnInit {
  course: any;
  countTemp: number = 0;
  total: number = 0;
  value: number = 0;
  isAttendance: boolean = false;
  dateTimes = [];
  dataAttendance = [];

  modules = new DetailCourseResponse();

  dateObj = new Date();
  courseId: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private auth: AuthService,
    private moduleService: ModuleService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((val) => {
      this.courseId = val.courseId;
      this.showModule();
    });

    this.activeRoute.params.subscribe((value) => {
      this.course = value;
    });
  }

  showModule() {
    this.moduleService
      .getModuleStudent(this.courseId, this.auth.getLoginResponse().userRoleId)
      .subscribe((value) => {
        this.modules = value.result;

        this.modules.modules.forEach((data) => {
          let dateStartMerge = `${data.schedule.date} ${data.schedule.startTime}`;
          let dateEndMerge = `${data.schedule.date} ${data.schedule.endTime}`;

          let dateStart = new Date(dateStartMerge);
          let dateEnd = new Date(dateEndMerge);
          let dateNow = new Date();

          if (dateNow > dateStart && dateNow < dateEnd) {
            data.isAttendance = true;
          } else {
            data.isAttendance = false;
          }

          // if (dateModule == dateCurrent && hourStartModule <= hourCurrent) {
          //   data.isAttendance = true;
          // } else if (
          //   dateModule == dateCurrent &&
          //   hourStartModule <= hourCurrent &&
          //   minuteStartModule < minuteCurrent &&
          //   hourEndModule >= hourCurrent
          // ) {
          //   data.isAttendance = false;
          // } else if (dateModule != dateCurrent) {
          //   data.isAttendance = false;
          // }
        });

        this.total = this.modules.modules.length;

        this.checkValidate();

        let val = (this.countTemp / this.total) * 100;
        this.value = Math.ceil(val);
      });
  }
  checkValidate() {
    let currentMonth = this.dateObj.getUTCMonth() + 1;
    let currentDay = this.dateObj.getUTCDate();
    let currentHour = this.dateObj.getHours();
    let currentMinute = this.dateObj.getMinutes();

    this.modules.modules.forEach((value) => {
      let datetime = value.schedule.date + ' ' + value.schedule.endTime;
      this.dateTimes.push(datetime);
      this.dataAttendance.push(value.attendanceId);
    });

    this.dateTimes.forEach((value, index) => {
      let newDate = new Date(value);

      let moduleMonth = newDate.getUTCMonth() + 1;
      let moduleDay = newDate.getUTCDate();

      let moduleHour = newDate.getHours();
      let moduleMinute = newDate.getMinutes();
      console.log(
        'Current: ',
        currentDay,
        currentMonth,
        currentHour,
        ':',
        currentMinute
      );
      console.log(
        'Module: ',
        moduleDay,
        moduleMonth,
        moduleHour,
        ':',
        moduleMinute
      );

      if (
        this.dataAttendance[index] != null &&
        currentMonth >= moduleMonth &&
        currentDay > moduleDay &&
        currentHour >= moduleHour
      ) {
        console.log('Completed');
        this.countTemp += 1;
      } else {
        console.log('Process');
      }
    });
  }

  viewForum(index: number) {
    let data = this.modules.modules[index];
    let id = data.id;
    console.log(id);

    this.route.navigate([`/module/`, id]);
  }

  attendanceRequest(moduleId: string) {
    let dataAttendance = new AttendanceRequest();
    dataAttendance.idModule = moduleId;
    dataAttendance.idStudent = this.auth.getLoginResponse().userRoleId;
    this.attendanceService
      .attendanceStudent(dataAttendance)
      .subscribe((val) => {
        console.log(val);
        this.showModule();
      });
  }
}
