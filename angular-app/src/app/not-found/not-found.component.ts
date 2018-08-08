import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="not-found">Page Not Found</div>`,
  styles: [`
    .not-found {
      display: flex;
      justify-content: center;
    }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
