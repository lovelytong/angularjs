import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {Stomp} from '../stomp.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.msg();
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  msg() {
    let ws = new WebSocket('ws://192.168.1.147:15674/ws');
    this.client = Stomp.over(ws);
    let _this = this;
    let on_connect = function () {
      let key = window.localStorage.getItem('userId');
      _this.client.subscribe('/queue/' + key, function (data) {
        console.log('建立起了连接 k==' + key);
        debugger;
        _this.notification.blank(data.headers.title, data.body);
      });
    };
    let on_error = function (e) {
      console.log('建立连接失败' + e);
    };

    this.client.connect('system', 'system', on_connect, on_error, '/');
  }

}
