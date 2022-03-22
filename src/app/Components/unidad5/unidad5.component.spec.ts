import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unidad5Component } from './unidad5.component';

describe('Unidad5Component', () => {
  let component: Unidad5Component;
  let fixture: ComponentFixture<Unidad5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unidad5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unidad5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
