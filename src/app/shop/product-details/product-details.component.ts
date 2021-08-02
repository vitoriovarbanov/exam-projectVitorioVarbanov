import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ReviewsService } from './reviews.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails
  imgCategory = this.router.snapshot.url[0].path
  rating

  reviewsForm = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  })
  constructor(private router: ActivatedRoute, private reviewsSrvc: ReviewsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productDetails = this.router.snapshot.data
    this.reviewsSrvc.getItemRating(this.imgCategory, this.router.snapshot.url[1].path)
      .subscribe(data => {
        this.rating = data
        Math.ceil(this.rating)
        const allr = Array.from(document.getElementsByClassName('rating__control'))
        for (const el of allr) {
          let [x, rate] = el.id.split('rc')
          if (Number(rate) === this.rating) {
            el.setAttribute("checked", '');
          }
        }
      })
  }

  postProductReview() {
    this.reviewsSrvc.createPostReviewRequest(this.imgCategory, this.router.snapshot.url[1].path, this.reviewsForm.value.comment, 4)
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'End now', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
