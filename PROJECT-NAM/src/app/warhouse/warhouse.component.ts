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
  baseUrl = window.localStorage.getItem('url');

  pageSize = 5;
  pageIndex = 1; //当前页码
  total = 50;//总数
  frontPagination = false;

  constructor(private http: HttpClient, private message: NzMessageService) {
  }

  pageIndexChange() {  //页码回调
    console.log(this.pageIndex);
    this.findAll();
  }

  findAll(): void {
    let url = this.baseUrl + '/WareHouseController/findAll/' + this.pageIndex + '/' + this.pageSize;
    this.http.get(url).subscribe(r => {
      this.list = r.data;
    });
  }

  onChange(val: any) {
    this.warehouse = val;
  }

  create() {
    this.url = this.baseUrl + '/WareHouseController/merge'; //更换url
    this.warehouse = {id: '', name: '', number: '', address: ''}; //新增初始化 表单
    this.isVisible = true; //打开模态框
  }

  edit() {
    this.url = this.baseUrl + '/WareHouseController/merge';
    this.isVisible = true;
  }

  deleted(val: any) {
    this.url = this.baseUrl + '/WareHouseController/del';
    this.warehouse = val;
    this.post();
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
