/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrasilComponent } from './brasil.component';

describe('BrasilComponent', () => {
  let component: BrasilComponent;
  let fixture: ComponentFixture<BrasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
