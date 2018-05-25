import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  ngOnInit(){
    window.localStorage.setItem("url",'http://127.0.0.1:8091');
  }

}
