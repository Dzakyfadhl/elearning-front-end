import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Constants from '../../../constants/constant';
import { ExperienceModel } from '../../../model/experience-model';
import { PhotoRequest } from '../../../model/photo-request';
import { TeacherProfileResponse } from '../../../model/teacher-dto/teacher-profile-response';
import { UpdateTeacherRequest } from '../../../model/teacher-dto/update-teacher-request';
import { AuthService } from '../../../service/auth.service';
import { TeacherService } from '../../../service/teacher.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-update-profile-teacher',
  templateUrl: './update-profile-teacher.component.html',
  styleUrls: ['./update-profile-teacher.component.css'],
})
export class UpdateProfileTeacherComponent implements OnInit {
  updateRequest = new UpdateTeacherRequest();
  photo: any;
  dataRequest = new PhotoRequest();
  formData = new FormData();
  file: string;
  isEdited: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private teacherService: TeacherService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (!this.authService.getLoginResponse().photoId) {
      this.photo = `assets/images/default.png`;
    } else {
      this.photo = `${Constants.BASE_URL_FILE}/${
        this.authService.getLoginResponse().photoId
      }`;
    }
    this.getDataProfile();
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.isEdited = true;
      let file: File = fileList[0];
      let data: FormData = new FormData();
      this.dataRequest.id = this.authService.getLoginResponse().photoId;
      this.dataRequest.userId = this.authService.getLoginResponse().userId;
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
  getDataProfile() {
    this.activeRoute.params.subscribe((value) => {
      this.updateRequest.firstName = value.firstName;
      this.updateRequest.lastName = value.lastName;
      this.updateRequest.gender = value.gender;
      this.updateRequest.phone = value.phone;
      this.updateRequest.id = value.id;
      this.updateRequest.titleDegree = value.titleDegree;
      this.updateRequest.username = value.username;
      this.updateRequest.updatedBy = this.authService.getLoginResponse().userId;
    });
  }

  async saveDataProfile() {
    if ((this.isEdited = true)) {
      this.teacherService.updatePhoto(this.formData).subscribe((value) => {
        console.log(value);
      });
    }

    try {
      const response = await this.teacherService.updateTeacherProfile(
        this.updateRequest
      );
      if (response.code === 200) {
        this.toastService.emitSuccessMessage('Updated', response.result);
      }
    } catch (error) {
      this.toastService.emitHttpErrorMessage(error, 'Failed to update student');
    }
    this.router.navigateByUrl('/profile-teacher');
  }

  cancel() {}
}
