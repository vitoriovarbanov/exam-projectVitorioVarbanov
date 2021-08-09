import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminsComponent } from './vitamins.component';

describe('VitaminsComponent', () => {
  let component: VitaminsComponent;
  let fixture: ComponentFixture<VitaminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
