import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module-course',
  templateUrl: './module-course.component.html',
  styleUrls: ['./module-course.component.css']
})
export class ModuleCourseComponent implements OnInit {
  course: any;
  countTemp: number = 0;
  total: number = 0;
  value: number = 0;

  dateTimes = [];
  modules = [
    {
      topic: 'Topic-1',
      title: 'Class & Object',
      desc: 'Class and object should define a part of Object Oriented Programming',
      status: 'absent',
      date: '2021/01/30',
      start: '08:00',
      end: '14:40:10'
    },
    {
      topic: 'Topic-2',
      title: 'Inheritance',
      desc: 'Inheritance should define a part of Object Oriented Programming',
      status: 'present',
      date: '2021/01/29',
      start: '08:00',
      end: '10:40:10'
    },
    {
      topic: 'Topic-3',
      title: 'Polymorpishm',
      desc: 'Polymorpishm should define a part of Object Oriented Programming',
      status: 'clear',
      date: '2021/01/29',
      start: '08:00',
      end: '10:40:10'
    },
    {
      topic: 'Topic-4',
      title: 'Base DAO',
      desc: 'Base DAO should define a part of Object Oriented Programming',
      date: '2021/02/28',
      start: '08:00',
      end: '10:40:10'
    },
    {
      topic: 'Topic-5',
      title: 'Base Service',
      desc: 'Base Service should define a part of Object Oriented Programming',
      date: '2021/02/28',
      start: '08:00',
      end: '10:40:10'
    },
    {
      topic: 'Topic-6',
      title: 'Security System',
      desc: 'Security System should define a part of Object Oriented Programming',
      date: '2021/02/28',
      start: '08:00',
      end: '10:40:10'
    },
    {
      topic: 'Topic-7',
      title: 'JDBC',
      desc: 'JDBC should define a part of Object Oriented Programming',
      date: '2021/02/28',
      start: '08:00',
      end: '10:40:10'
    },
    {
      topic: 'Topic-8',
      title: 'Operator',
      desc: 'Operator should define a part of Object Oriented Programming',
      date: '2021/01/29',
      start: '08:00',
      end: '12:40:10'
    }
  ]

  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.total = this.modules.length
    this.checkValidate();
    console.log(this.countTemp, " of ", this.total);
    let val = (this.countTemp / this.total) * 100;
    this.value = Math.ceil(val);
    console.log(this.value);

    this.activeRoute.params.subscribe(value => {
      this.course = value;
      console.log(this.course);

    });
  }

  checkValidate() {
    let dateObj = new Date();
    let currentMonth = dateObj.getUTCMonth() + 1;
    let currentDay = dateObj.getUTCDate();
    let currentHour = dateObj.getHours();
    let currentMinute = dateObj.getMinutes();

    this.modules.forEach(value => {
      let datetime = value.date + " " + value.end;
      this.dateTimes.push(datetime);
    });

    this.dateTimes.forEach(value => {
      console.log("DATE TIME: " + value);
      let newDate = new Date(value);

      let moduleMonth = newDate.getUTCMonth() + 1;
      let moduleDay = newDate.getUTCDate();

      let moduleHour = newDate.getHours();
      let moduleMinute = newDate.getMinutes();
      console.log("Current: ", currentDay, currentMonth, currentHour, ":", currentMinute);
      console.log("Module: ", moduleDay, moduleMonth, moduleHour, ":", moduleMinute);

      if(currentMonth >= moduleMonth && currentDay > moduleDay){
        console.log("Completed");
        this.countTemp +=1;
        // if(currentHour >= moduleHour && currentMinute > moduleMinute){
        //   console.log("Completed");
        //   this.countTemp +=1;
        // }else{
        //   console.log("Process");
          
        // }
      }else{
        console.log("process");
      }
      // if (currentMonth >= moduleMonth) {
      //   if (currentDay >= moduleDay) {
      //     if (currentHour >= moduleHour) {
      //       if (currentMinute > moduleMinute) {
      //         this.countTemp += 1;
      //         console.log("Module Complete..");
      //       }else{
      //         console.log("Module process");
              
      //       }
      //     }else{
      //       console.log("Module Process");
            
      //     }
      //   } else {

      //     this.countTemp = this.countTemp;
      //     console.log("Module Process");
      //   }
      // } else {
      //   this.countTemp = this.countTemp;
      //   console.log("Module process");
      // }
    });

  }

  viewForum(index: number) {
    let data = this.modules[index];
    let title = data.title;
    this.route.navigateByUrl(`/view-detail-module/${title}`);
  }

}
