import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {User} from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    password: ''
  };

  constructor(private http: HttpClient, private message: NzMessageService, private router: Router) {
  }

  url = 'http://192.168.1.147:8091';

  post() {
    const next = function (r) {
      if (r.success) {
        const type = 'success';
        const routerUrl = 'home';
        _this.message.create(type, r.msg);
        _this.router.navigateByUrl(routerUrl);
      } else {
        const type = 'error';
        _this.message.create(type, r.msg);
      }
    };
    const error = function (e) {
      _this.message.error(e);
    };
    const _this = this;
    const url = this.url + '/ErpLoginUserController/login';
    this.http.post(url, this.user)
      .subscribe(next, error);
  }

  ngOnInit(): void {
  }
}
