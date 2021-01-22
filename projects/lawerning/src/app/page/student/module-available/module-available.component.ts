import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module-available',
  templateUrl: './module-available.component.html',
  styleUrls: ['./module-available.component.css']
})
export class ModuleAvailableComponent implements OnInit {
  course: any;

  modules = [
    {
      topic: 'Topic-1',
      title: 'Class & Object',
      desc: 'Class and object should define a part of Object Oriented Programming'
    },
    {
      topic: 'Topic-2',
      title: 'Inheritance',
      desc: 'Inheritance should define a part of Object Oriented Programming'
    },
    {
      topic: 'Topic-3',
      title: 'Polymorpishm',
      desc: 'Polymorpishm should define a part of Object Oriented Programming'
    },
    {
      topic: 'Topic-4',
      title: 'Base DAO',
      desc: 'Base DAO should define a part of Object Oriented Programming'
    },
    {
      topic: 'Topic-5',
      title: 'Base Service',
      desc: 'Base Service should define a part of Object Oriented Programming'
    },
    {
      topic: 'Topic-6',
      title: 'Security System',
      desc: 'Security System should define a part of Object Oriented Programming'
    },
    {
      topic: 'Topic-7',
      title: 'JDBC',
      desc: 'JDBC should define a part of Object Oriented Programming'
    },
    {
      topic: 'Topic-8',
      title: 'Operator',
      desc: 'Operator should define a part of Object Oriented Programming'
    }
  ]

  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(value => {
      this.course = value;
      console.log(this.course);
    });
  }

}
