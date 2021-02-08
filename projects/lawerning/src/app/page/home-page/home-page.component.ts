import { Component, OnInit } from '@angular/core';
import { Gender } from '../../model/gender';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  courses = [
    {
      category: 'Programming',
      typeName: 'Java Framework',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Backend Developer',
    },
    {
      category: 'Programming',
      typeName: 'Java OOP',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Backend Developer',
    },
    {
      category: 'Programming',
      typeName: 'Java OOP',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Backend Developer',
    },
    {
      category: 'Business',
      typeName: 'Marketing MIX',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Manager',
    },
    {
      category: 'Business',
      typeName: 'Creative Industry',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Manager',
    },

    {
      category: 'Business',
      typeName: 'Marketing MIX',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Manager',
    },
    {
      category: 'Business',
      typeName: 'Creative Industry',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Manager',
    },
    {
      category: 'Business',
      typeName: 'Creative Industry',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Manager',
    },
    {
      category: 'UI/UX Design',
      typeName: 'Web Apps',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Designer',
    },
    {
      category: 'UI/UX Design',
      typeName: 'Mobile Apps',
      teacherName: 'Ryan Rivaldo, S.Kom.',
      special: 'Designer',
    },
  ];
  category = [];
  categoryMerge: any[] = [];
  selectedCourse: any = 'all';
  courseFiltering: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.courses.forEach((data) => {
      this.category.push(data.category);
    });

    this.categoryMerge = this.category.filter(
      (item, i, array) => array.indexOf(item) === i
    );
    this.categoryMerge.forEach((val) => console.log(val));
    this.courseFiltering = this.courses;

    console.log(this.categoryMerge);
  }

  onChange(newValue) {
    this.selectedCourse = newValue;
    console.log(this.selectedCourse);

    if (this.selectedCourse == 'all') {
      this.courseFiltering = this.courses;
    } else {
      this.courseFiltering = this.courses.filter(
        (value) => value.category == this.selectedCourse
      );
    }
  }
}
