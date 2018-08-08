import { Person } from './../person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-page',
  templateUrl: 'person-page.component.html',
  styleUrls: ['person-page.component.scss']
})
export class PersonPageComponent implements OnInit {

  person: Person;

  constructor() { }

  ngOnInit() {
    this.person = {
      name: 'Alice',
      title: 'Web Developer'
    };
  }

}
