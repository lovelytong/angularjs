import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarhouseComponent } from './warhouse.component';

describe('WarhouseComponent', () => {
  let component: WarhouseComponent;
  let fixture: ComponentFixture<WarhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
