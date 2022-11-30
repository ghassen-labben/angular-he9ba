import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrduitSearchComponent } from './prduit-search.component';

describe('PrduitSearchComponent', () => {
  let component: PrduitSearchComponent;
  let fixture: ComponentFixture<PrduitSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrduitSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrduitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
