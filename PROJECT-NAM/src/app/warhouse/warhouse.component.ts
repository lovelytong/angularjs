import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-warhouse',
  templateUrl: './warhouse.component.html',
  styleUrls: ['./warhouse.component.css']
})
export class WarhouseComponent implements OnInit {

  list = [];
  isVisible = false;
  warehouse = {id: '', name: '', number: '', address: ''};
  url = '';

  constructor(private http: HttpClient, private message: NzMessageService) {
  }

  findAll(): void {
    let url = 'http://192.168.1.147:8091/WareHouseController/findAll/1';
    this.http.get(url).subscribe(r => {
      this.list = r.data;
    });
  }

  onChange(val: any) {
    this.warehouse = val;
  }

  create() {
    this.warehouse = {id: '', name: '', number: '', address: ''}; //新增初始化 表单
    this.url = 'http://192.168.1.147:8091/WareHouseController/merge'; //更换url
    this.isVisible = true; //打开模态框
  }

  edit() {
    this.url = 'http://192.168.1.147:8091/WareHouseController/merage';
    this.isVisible = true;
  }

  deleted() {
    this.url = 'http://192.168.1.147:8091/WareHouseController/del';
  }

  post() {
    let _this = this;
    this.http.post(this.url, this.warehouse, httpOptions).subscribe(r => {
        _this.findAll(); //刷新数据
        _this.isVisible = false;
        _this.message.create('success', r.msg);
      }
      , e => {
        console.log(e);
      });
  }

  ngOnInit() {
    this.findAll();
  }


}
