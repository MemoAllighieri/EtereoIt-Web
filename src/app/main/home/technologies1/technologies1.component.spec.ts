import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technologies1Component } from './technologies1.component';

describe('Technologies1Component', () => {
  let component: Technologies1Component;
  let fixture: ComponentFixture<Technologies1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Technologies1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technologies1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
