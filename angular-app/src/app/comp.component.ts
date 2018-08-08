import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "person",
  template: ``
})
export class PersonComponent {
  @Input() name: string;
  @Input() age: number;
}


@Component({
  selector: "person-list",
  template: 
  `<div class="list">
    <person *ngFor="let p of list"
      [name]="p.name"[age]="p.age">
      </person>
  </div>`
})
export class PersonListComponent implements OnInit {
  list: any[];

  ngOnInit() {
    this.list = [
      {name: 'John', age: 23},
      {name: 'Ana', age: 34}
    ];
  }
}
