import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

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
    const _this = this;
    this.http.post(this.url + '/ErpLoginUserController/login', this.user)
      .subscribe(function (r) {
        if (r.success) {
          _this.message.create('success', r.msg);
          _this.router.navigateByUrl('home');
        } else {
          _this.message.create('error', r.msg);
        }
      }, function (e) {
        _this.message.error(e);
      });
  }

  ngOnInit(): void {
  }
}
