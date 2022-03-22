import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unidad3Component } from './unidad3.component';

describe('Unidad3Component', () => {
  let component: Unidad3Component;
  let fixture: ComponentFixture<Unidad3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unidad3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unidad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
