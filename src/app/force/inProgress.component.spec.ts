import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressComponent } from './inProgress.component';

describe('ForceComponent', () => {
  let component: InProgressComponent;
  let fixture: ComponentFixture<InProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
