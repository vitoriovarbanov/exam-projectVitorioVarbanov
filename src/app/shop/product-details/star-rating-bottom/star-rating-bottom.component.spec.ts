import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingBottomComponent } from './star-rating-bottom.component';

describe('StarRatingBottomComponent', () => {
  let component: StarRatingBottomComponent;
  let fixture: ComponentFixture<StarRatingBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
