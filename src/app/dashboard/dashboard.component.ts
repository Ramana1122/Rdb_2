import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cardsData: any[] = [
    { title: 'Designation', count: 26, iconName: 'fa fa-certificate',
    details: [
      { label: 'Assoc. Professional', value: 53,count:20},
      { label: 'Professional - I', value: 16,count:20},
      { label: 'Professional - II', value: 12,count:20 },
      { label: 'AssocMgr/SrProf', value: 16,count:20 },
      { label: 'Manager', value: 2,count:20}
    ] },
    { title: 'Team', count: 8, iconName: 'fa fa-users',
    details: [
      { label: 'Assoc. Professional', count: 26 },
    { label: 'Professional - I', count: 8 },
    { label: 'Professional - II', count: 6 },
    { label: 'AssocMgr/SrProf', count: 8 },
    { label: 'Manager', count: 1 },
    { label: 'Development', count: 28 },
    { label: 'Testing', count: 10 },
    { label: 'Design', count: 2 },
    { label: 'Architecture & PE', count: 3 },
    { label: 'DevOps', count: 1 },
    { label: 'Technical Writer', count: 3 },
    { label: 'Management', count: 1 },
    { label: 'Prog Management', count: 1 }
    ] },
    { title: 'Release', count: 6, iconName: 'fa fa-key',
  details:[
    { label: 'Testing', count: 10 },
    { label: 'Design', count: 2 },
    { label: 'Architecture & PE', count: 3 },
    { label: 'DevOps', count: 1 },
    { label: 'Technical Writer', count: 3 },
  ] },
    { title: 'Resigned', count: 8, iconName: 'fa fa-user-times',
  details:[
    { label: 'AssocMgr/SrProf', count: 8 },
    { label: 'Manager', count: 1 },
    { label: 'Development', count: 28 },
    { label: 'Testing', count: 10 },
    { label: 'Design', count: 2 },
    { label: 'Architecture & PE', count: 3 },
  ] },
    { title: 'Onborded', count: 1, iconName: 'fa fa-user-plus',
  details:[
    { label: 'Professional - II', count: 6 },
    { label: 'AssocMgr/SrProf', count: 8 },
    { label: 'Manager', count: 1 },
    { label: 'Development', count: 28 },
    { label: 'Testing', count: 10 },
    { label: 'Design', count: 2 },
  ] },
  ];
}
