import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dtl-module',
  templateUrl: './dtl-module.component.html',
  styleUrls: ['./dtl-module.component.css']
})
export class DtlModuleComponent implements OnInit {
  moduleSelected: any;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(value => {
      this.moduleSelected = value;
      console.log(this.moduleSelected);
    })
  }

}
