import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCategoriesProductsComponent } from './navbar-categories-products.component';

describe('NavbarCategoriesProductsComponent', () => {
  let component: NavbarCategoriesProductsComponent;
  let fixture: ComponentFixture<NavbarCategoriesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCategoriesProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCategoriesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
