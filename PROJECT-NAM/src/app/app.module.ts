import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './routing/app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {WarhouseComponent} from './warhouse/warhouse.component';
import {CommodityBrandComponent} from './commodity-brand/commodity-brand.component';
import {GoodsComponent} from './goods/goods.component';
import {GoodsCategoryComponent} from './goods-category/goods-category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WarhouseComponent,
    CommodityBrandComponent,
    GoodsComponent,
    GoodsCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
