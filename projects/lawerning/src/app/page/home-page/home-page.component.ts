import { Component, OnInit } from '@angular/core';

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
  courseByCategory = new Map<string, any[]>();

  constructor() {}

  ngOnInit(): void {
    this.courses.forEach((data) => {
      this.category.push(data.category);
    });

    this.categoryMerge = this.category.filter(
      (item, i, array) => array.indexOf(item) === i
    );
    // console.log(this.courseByCategory);
    this.categoryMerge.forEach((val) => console.log(val));

    console.log(this.categoryMerge);
  }
}
