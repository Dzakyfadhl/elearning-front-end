import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import Constants from '../../../constants/constant';
import { PhotoRequest } from '../../../model/photo-request';
import { StudentUpdateRequest } from '../../../model/student/student-edit-request';
import { StudentResponse } from '../../../model/student/student-response';
import { AuthService } from '../../../service/auth.service';
import { LoadingService } from '../../../service/loading.service';
import { StudentService } from '../../../service/student.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-update-profile-student',
  templateUrl: './update-profile-student.component.html',
  styleUrls: ['./update-profile-student.component.css'],
})
export class UpdateProfileStudentComponent implements OnInit {
  studentProfile = new StudentResponse();
  photo: any;
  formData = new FormData();
  dataRequest = new PhotoRequest();

  isEdited: boolean = false;

  constructor(
    private studentService: StudentService,
    private toastService: ToastService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.dataProfile();
    if (this.auth.getLoginResponse().photoId != null) {
      this.photo = `${Constants.BASE_URL_FILE}/${
        this.auth.getLoginResponse().photoId
      }`;
    } else {
      this.photo = `assets/images/default.png`;
    }
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.isEdited = true;
      let file: File = fileList[0];
      let data: FormData = new FormData();
      this.dataRequest.id = this.auth.getLoginResponse().photoId;
      this.dataRequest.userId = this.auth.getLoginResponse().userId;
      this.dataRequest.type = 'USER_PHOTO';

      data.append('file', file);
      data.append('content', JSON.stringify(this.dataRequest));

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.photo = event.target.result;
      };

      this.formData = data;
    } else {
      this.isEdited = false;
    }
  }

  dataProfile() {
    this.activeRoute.params.subscribe(
      (value) => {
        this.studentProfile.id = value.id;
        this.studentProfile.firstName = value.firstName;
        this.studentProfile.lastName = value.lastName;
        this.studentProfile.phone = value.phone;
        this.studentProfile.gender = value.gender;
        this.studentProfile.username = value.username;
      },
      (error) => {
        this.toastService.emitHttpErrorMessage(error);
      }
    );
  }
  save() {
    let requestProfile = new StudentUpdateRequest();
    if (this.studentProfile.id != null) {
      requestProfile.id = this.studentProfile.id;
      requestProfile.firstName = this.studentProfile.firstName;
      requestProfile.lastName = this.studentProfile.lastName;
      requestProfile.phone = this.studentProfile.phone;
      requestProfile.username = this.studentProfile.username;
      requestProfile.gender = this.studentProfile.gender;
      requestProfile.updatedBy = this.auth.getLoginResponse().userId;
    }

    if (this.isEdited == true) {
      this.studentService.updatePhoto(this.formData).subscribe(
        (val) => {
          this.dataProfile();
        },
        (error) => {
          this.dataProfile();
          this.toastService.emitHttpErrorMessage(error, 'Failure');
        }
      );
    }
    this.studentService.updateProfile(requestProfile).subscribe(
      (value) => {
        this.dataProfile();
        this.toastService.emitSuccessMessage('Successfully', value.result);
      },
      (error) => {
        this.dataProfile();
        this.toastService.emitHttpErrorMessage(error, 'Failed');
      }
    );
    this.router.navigateByUrl('/profile-student');
  }

  cancel() {
    this.dataProfile();
    this.router.navigateByUrl('/profile-student');
  }
}
