import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont1Component } from './cont1.component';

describe('Cont1Component', () => {
  let component: Cont1Component;
  let fixture: ComponentFixture<Cont1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cont1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cont1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
