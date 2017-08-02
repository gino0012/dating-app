import { Config } from './../config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(private _config: Config) {
    this.user = _config.USER;
  }

  ngOnInit() {
  }

}
