import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {WarhouseComponent} from '../warhouse/warhouse.component';
import {CommodityBrandComponent} from '../commodity-brand/commodity-brand.component';
import {GoodsComponent} from '../goods/goods.component';
import {GoodsCategoryComponent} from '../goods-category/goods-category.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
      path: 'home',
      component: HomeComponent,
      children: [
        {path: 'warehouse', component: WarhouseComponent},
        {path: 'brand', component: CommodityBrandComponent},
        {path: 'goods', component: GoodsComponent},
        {path: 'goodsCategory', component: GoodsCategoryComponent},
      ]
    },
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
