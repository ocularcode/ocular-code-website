import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsComponent } from './clouds.component';

describe('CloudsComponent', () => {
  let component: CloudsComponent;
  let fixture: ComponentFixture<CloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
