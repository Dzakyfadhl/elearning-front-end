import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modif-admin-subject',
  templateUrl: './modif-admin-subject.component.html',
  styleUrls: ['./modif-admin-subject.component.css']
})
export class ModifAdminSubjectComponent implements OnInit {

  code: string;
  name: string;
  description: string;

  validateCode:boolean =true;
  validateName:boolean =true;
  validateDesc:boolean =true;

  constructor() { }

  ngOnInit(): void {
  }

  validateForm(): boolean {
    return false;
  }

  save() {
    if (this.validateForm() == true) {
      
    }else{

    }

  }


}
