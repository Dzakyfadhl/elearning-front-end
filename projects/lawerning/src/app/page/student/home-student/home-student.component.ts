import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {
  txtCourse: string;

  course : any = {};

  courseFiltering = [];
  selectedCourse: any = 'all';
  
  courses = [
    {
      image : 'assets/images/male1.jpeg',
      name: 'Object Oriented Programming',
      role: 'teacher',
      category: 'Programming',
      status: '1',
      teacher: 'Ryan Rivaldo, S.Kom.'
    },
    {
      image : 'assets/images/male1.jpeg',
      name: 'Database MySQL',
      role: 'teacher',
      category: 'Programming',
      status: '1',
      teacher: 'Mochamad Ray, S.Kom.'
    },
    {
      image : 'assets/images/female.jpg',
      name: 'Java Framework',
      role: 'teacher',
      category: 'Programming',
      status: '2',
      teacher: 'Farel Yuda, S.Kom.'
    },
    {
      image : 'assets/images/male1.jpeg',
      name: 'Creative Industry',
      role: 'teacher',
      category: 'Business',
      status: '2',
      teacher: 'Galih Galihum, S.E.'
    }
    ,
    {
      image : 'assets/images/male1.jpeg',
      name: 'Marketing MIX',
      role: 'teacher',
      category: 'Business',
      status: '2',
      teacher: 'Galih Galihum, S.E.'
    },
    {
      image : 'assets/images/male1.jpeg',
      name: 'Manajemen Business',
      role: 'teacher',
      category: 'Business',
      status: '2',
      teacher: 'Galih Galihum, S.E.'
    }
  ];

  category = [];
  
  data: any;
  keyString: string;

  responsiveOptions;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '411px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    
    this.courseFiltering = this.courses;
    // concat list category
    this.courses.forEach(val =>{
      this.category.push(val.category);
    });
    // merging category
    this.data = this.category.filter((item, i, array) => array.indexOf(item) === i);
    console.log(this.data);

    if(this.selectedCourse == undefined){
      this.courseFiltering = this.courses;
    }
  }
  onChange(newValue){
    this.selectedCourse = newValue;
    console.log(this.selectedCourse);
      if(this.selectedCourse == 'all'){
        this.courseFiltering = this.courses;
      }else{
        this.courseFiltering = this.courses.filter(value => value.category == this.selectedCourse);
      }
  }

  searchKey(){
    this.courseFiltering = this.courses.filter(value =>{
      return value.category.toLocaleLowerCase().match(this.keyString.toLocaleLowerCase());
    })
  }

  viewModule(index : number){
    let tempCourse: any= this.courses[index];
    let course = tempCourse.name;
    console.log(course);
    this.route.navigate(['/module-available/',course]);
  }

}
