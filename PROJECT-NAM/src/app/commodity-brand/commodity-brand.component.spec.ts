import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityBrandComponent } from './commodity-brand.component';

describe('CommodityBrandComponent', () => {
  let component: CommodityBrandComponent;
  let fixture: ComponentFixture<CommodityBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
