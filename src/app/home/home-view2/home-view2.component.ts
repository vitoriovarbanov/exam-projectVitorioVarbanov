import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view2',
  templateUrl: './home-view2.component.html',
  styleUrls: ['./home-view2.component.css']
})
export class HomeView2Component implements OnInit {
  displayedViews = [
    { src: '../../../assets/1.jpg', text: 'Healthy vitamins that make your day better'},
    { src: '../../../assets/2.jpg', text: 'Your daily dose of calmness'},
    { src: '../../../assets/3.jpg', text: 'Fredi! You can\'t live without it'},
    { src: '../../../assets/health4.jpg', text: 'This amazing your product that everyone wants!'},
    { src: '../../../assets/health5.jpg', text: 'Would you buy that too?'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
