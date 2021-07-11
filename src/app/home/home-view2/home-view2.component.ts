import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view2',
  templateUrl: './home-view2.component.html',
  styleUrls: ['./home-view2.component.css']
})
export class HomeView2Component implements OnInit {
  displayedViews = [
    { src: '../../../assets/1.jpg', text: 'Lorem Ipsum Text Nice'},
    { src: '../../../assets/2.jpg', text: 'Lorem Ipsum Text Nice'},
    { src: '../../../assets/3.jpg', text: 'Lorem Ipsum Text Nice'},
    { src: '../../../assets/health4.jpg', text: 'Lorem Ipsum Text Nice'},
    { src: '../../../assets/health5.jpg', text: 'Lorem Ipsum Text Nice'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
