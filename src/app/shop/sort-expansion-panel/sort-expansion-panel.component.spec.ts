import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortExpansionPanelComponent } from './sort-expansion-panel.component';

describe('SortExpansionPanelComponent', () => {
  let component: SortExpansionPanelComponent;
  let fixture: ComponentFixture<SortExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
