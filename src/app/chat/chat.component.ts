import { Config } from './../config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  loverBoy;
  user;
  convo = [];
  msg;
  index = 0;

  constructor(private _config: Config) {
    this.loverBoy = _config.LOVER_BOY;
    this.user = _config.USER;
  }

  ngOnInit() {
    const loop = () => {
        setTimeout(() => {
          this.convo.push(this._config.CONVO[this.index]);
          this.index++;
          this.scroll();
          if (this.index < 4) {
            loop();
          }
        }, this._config.CONVO[this.index]['interval']);
    };

    const loop2 = () => {
        setTimeout(() => {
          this.convo.push(this._config.CONVO2[this.index]);
          this.index++;
          this.scroll();
          if (this.index < 2) {
            loop2();
          }
        }, this._config.CONVO2[this.index]['interval']);
    };
    if (!window.localStorage.getItem('convo')) {
      loop();
    } else if (window.localStorage.getItem('convo') === '2') {
      this.convo = this._config.CONVO;
      this.scroll();
      loop2();
    }
  }

  send() {
    if (this.msg) {
      this.convo.push({
        author: 'angel',
        body: this.msg
      });
      this.msg = null;
      this.scroll();
      this.reply();
    }
  }

  reply() {
    this.index++;
    let msg = this._config.CONVO[this.index];
    let interval = this._config.CONVO[this.index]['interval'];

    if (window.localStorage.getItem('convo') === '2') {
      msg = this._config.CONVO2[this.index];
      interval = this._config.CONVO2[this.index]['interval'];
    }

    setTimeout(() => {
      this.convo.push(msg);
      this.index++;
      this.scroll();

      if (this.index === this._config.CONVO2.length && window.localStorage.getItem('convo') === '2') {
        setTimeout(() => {
          this._config.CONVO3.forEach(val => {
            this.convo.push(val);
          });
        }, this._config.TIME_TO_CHAT);
      }
    }, interval);
  }

  scroll() {
    document.getElementById('convo').scrollTop = document.getElementById('convoUl').scrollHeight;
    document.getElementById('convo').scrollTop += document.getElementById('convoUl').scrollHeight;
    console.log(document.getElementById('convo').scrollTop);
    console.log(document.getElementById('convo').scrollHeight);
  }

  back() {
    this._config.showChat = false;
    window.localStorage.setItem('convo', '2');
  }
}
