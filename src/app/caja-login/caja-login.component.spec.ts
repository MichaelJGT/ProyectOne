import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaLoginComponent } from './caja-login.component';

describe('CajaLoginComponent', () => {
  let component: CajaLoginComponent;
  let fixture: ComponentFixture<CajaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
