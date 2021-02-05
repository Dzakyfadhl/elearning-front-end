import { Component, OnInit } from '@angular/core';
import { SubjectCategoryCreateRequestDTO } from '../../../model/subject-category-dto/subject-category-create-request';
import { SubjectCategoryResponseDTO } from '../../../model/subject-category-dto/subject-category-response';
import { AuthService } from '../../../service/auth.service';
import { SubjectCategoryService } from '../../../service/subject-category.service';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.css'],
})
export class AdminSubjectComponent implements OnInit {
  listSubjects: SubjectCategoryResponseDTO[];
  codeVal: string;
  nameVal: string;
  descVal: string;

  first = 0;
  rows = 5;

  constructor(
    private auth: AuthService,
    private subjectService: SubjectCategoryService
  ) {}

  ngOnInit(): void {
    this.defineSubjects();
  }

  defineSubjects() {
    this.subjectService.getSubjectCategory().subscribe(
      (val) => {
        this.listSubjects = val.result;
      },
      (err) => {}
    );
  }

  createSubject() {
    let data = new SubjectCategoryCreateRequestDTO();
    data.code = this.codeVal;
    data.subjectName = this.nameVal;
    data.description = this.descVal;
    data.createdBy = this.auth.getLoginResponse().userId;

    this.subjectService.insertSubjectCategory(data).subscribe(
      (val) => {
        console.log(val);
      },
      (err) => {}
    );
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }
}
