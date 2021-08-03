import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.css']
})
export class TopViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToURL(url){
    window.open(url, "_blank");
  }

}
