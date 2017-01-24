/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyProduct } from './product.component';

describe('ProductComponent', () => {
  let component: MyProduct;
  let fixture: ComponentFixture<MyProduct>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProduct ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
