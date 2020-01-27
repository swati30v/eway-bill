import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwayFormComponent } from './eway-form.component';

describe('EwayFormComponent', () => {
  let component: EwayFormComponent;
  let fixture: ComponentFixture<EwayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
