import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-goods-category',
  templateUrl: './goods-category.component.html',
  styleUrls: ['./goods-category.component.css']
})

export class GoodsCategoryComponent implements OnInit {
  list = []
  isVisible = false;
  goods = {id: '', name: ''};
  url = '';
  baseUrl = window.localStorage.getItem('url');

  pageSize = 5;
  pageIndex = 1; //当前页码
  total = 50;//总数
  frontPagination = false;

  pageIndexChange() {  //页码回调
    console.log(this.pageIndex);
    this.findAll();
  }

  findAll(): void {
    let url = this.baseUrl + '/GoodsCategoryController/findAll/' + this.pageIndex + '/' + this.pageSize;
    this.http.get(url).subscribe(r => {
      this.list = r.data;
    });
  }

  edit() {
    this.url = this.baseUrl + '/GoodsCategoryController/merge';
    this.isVisible = true;
  }

  create() {
    this.url = this.baseUrl + '/GoodsCategoryController'; //更换url
    this.goods = {id: '', name: ''}; //新增初始化 表单
    this.isVisible = true; //打开模态框
  }

  post() {
    let _this = this;
    this.http.post(this.url, this.goods, httpOptions).subscribe(r => {
        _this.findAll(); //刷新数据
        _this.isVisible = false;
        _this.message.create('success', r.msg);
      }
      , e => {
        console.log(e);
      });
  }


  constructor(private http: HttpClient, private message: NzMessageService) { }

  ngOnInit() {
    this.findAll()
  }

}
