import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeView2Component } from './home-view2.component';

describe('HomeView2Component', () => {
  let component: HomeView2Component;
  let fixture: ComponentFixture<HomeView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeView2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
