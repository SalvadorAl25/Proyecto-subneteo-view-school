import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadIComponent } from './unidad-i.component';

describe('UnidadIComponent', () => {
  let component: UnidadIComponent;
  let fixture: ComponentFixture<UnidadIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
