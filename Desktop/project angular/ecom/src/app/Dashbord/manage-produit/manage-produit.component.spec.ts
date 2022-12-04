import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProduitComponent } from './manage-produit.component';

describe('ManageProduitComponent', () => {
  let component: ManageProduitComponent;
  let fixture: ComponentFixture<ManageProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
