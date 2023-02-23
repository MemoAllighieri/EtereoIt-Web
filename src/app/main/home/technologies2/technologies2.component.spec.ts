import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technologies2Component } from './technologies2.component';

describe('Technologies2Component', () => {
  let component: Technologies2Component;
  let fixture: ComponentFixture<Technologies2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Technologies2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technologies2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
