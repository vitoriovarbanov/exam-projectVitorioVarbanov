import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating-bottom',
  templateUrl: './star-rating-bottom.component.html',
  styleUrls: ['./star-rating-bottom.component.css']
})
export class StarRatingBottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickedHere(e) {
    const allr = Array.from(document.getElementsByClassName('rating__control2'))
    for (const el of allr) {
      if (el.id === e.target.id) {
        el.setAttribute("checked", '');
      }
    }
    /* this.openSnackBar() */
    /* e.target.setAttribute("checked", "checked");
    console.log(e.target) */
  }
}
