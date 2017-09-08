import { ChatComponent } from './../chat/chat.component';
import { Config } from './../config';
import { Component, OnInit, Input } from '@angular/core';

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
    // setTimeout(() => {
    //   this._config.showChat = true;
    // }, this._config.TIME_TO_CHAT);
    document.addEventListener("keyup", (e) => {
      if (e.which === 13) {
        this._config.showChat = true;
      }
    });
  }

}
