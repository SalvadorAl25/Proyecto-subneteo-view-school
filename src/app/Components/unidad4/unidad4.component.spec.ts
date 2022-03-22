import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unidad4Component } from './unidad4.component';

describe('Unidad4Component', () => {
  let component: Unidad4Component;
  let fixture: ComponentFixture<Unidad4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unidad4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unidad4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
