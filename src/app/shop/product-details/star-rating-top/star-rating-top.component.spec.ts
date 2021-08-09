import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingTopComponent } from './star-rating-top.component';

describe('StarRatingTopComponent', () => {
  let component: StarRatingTopComponent;
  let fixture: ComponentFixture<StarRatingTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
