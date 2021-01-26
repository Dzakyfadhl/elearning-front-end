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

  
  messages = [
    {
      image: './assets/images/male1.jpeg',
      nama: 'Mochamad Apry',
      time: '30/01/2020 - 12:30',
      message: 'Hi mom, i wanna sending my attachment lehehehehe hehaehea aeaenjea',
      role: 'Student'
    },
    {
      image: './assets/images/female.jpg',
      nama: 'Dinda Anisyah',
      time: '30/01/2020 - 12:32',
      message: 'Oh yeah, thats right bro.. ',
      role: 'Teacher'
    },
    {
      image: './assets/images/male1.jpeg',
      nama: 'Mochamad Apry',
      time: '30/01/2020 - 12:30',
      message: 'Hmm, thank u mom.',
      role: 'Student'
    }
    
  ]
  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(value => {
      this.moduleSelected = value;
      console.log(this.moduleSelected);
    })
  }

}
