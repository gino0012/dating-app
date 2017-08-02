import { Config } from './../config';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList;

  constructor(private _config: Config) {
    this.peopleList = this._config.PEOPLE;
  }

  ngOnInit() {
  }

}
