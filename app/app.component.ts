import {Component, OnInit} from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello world!';
  }
}
