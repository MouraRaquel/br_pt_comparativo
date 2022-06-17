/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuemsouComponent } from './quemsou.component';

describe('QuemsouComponent', () => {
  let component: QuemsouComponent;
  let fixture: ComponentFixture<QuemsouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemsouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemsouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
