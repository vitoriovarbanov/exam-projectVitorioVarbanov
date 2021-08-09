import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ReviewsService } from './reviews.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ProfileService } from 'src/app/profile/profile.service';

interface User {
  displayName: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails
  imgCategory = this.router.snapshot.url[0].path
  rating
  username

  reviewsForm = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  })
  constructor(private router: ActivatedRoute, private reviewsSrvc: ReviewsService,
    private _snackBar: MatSnackBar, private profileService: ProfileService) {
      this.profileService.getUserInfo().subscribe(data=>{
        this.username = data
      })
  }

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
    this.reviewsSrvc.createPostReviewRequest(this.imgCategory, this.router.snapshot.url[1].path, this.reviewsForm.value.comment, 4, this.username.displayName)
    this.reviewsForm.value.comment = '';
    this.openSnackBar('Your review has been saved!')
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar(text) {
    this._snackBar.open(text, 'Close', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
