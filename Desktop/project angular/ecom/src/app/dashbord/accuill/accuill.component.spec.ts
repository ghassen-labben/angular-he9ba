import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuillComponent } from './accuill.component';

describe('AccuillComponent', () => {
  let component: AccuillComponent;
  let fixture: ComponentFixture<AccuillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccuillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
