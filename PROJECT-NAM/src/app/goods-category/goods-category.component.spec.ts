import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCategoryComponent } from './goods-category.component';

describe('GoodsCategoryComponent', () => {
  let component: GoodsCategoryComponent;
  let fixture: ComponentFixture<GoodsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
