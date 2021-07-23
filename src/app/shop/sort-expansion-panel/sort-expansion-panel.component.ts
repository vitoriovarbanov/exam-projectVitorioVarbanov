import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sort-expansion-panel',
  templateUrl: './sort-expansion-panel.component.html',
  styleUrls: ['./sort-expansion-panel.component.css']
})
export class SortExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  sortCriteriaDef: string = 'Default'
  sortCriteriaLowHigh: string = 'Price Low to High'
  sortCriteriaHighLow: string = 'Price High to Low'
  currentSortingCriteria: string = 'Default';
  @Output() outputSortItemsEvent = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  sortProductItems(sortCriteria) {
    this.outputSortItemsEvent.emit(sortCriteria)
    this.currentSortingCriteria = sortCriteria
  }

}
