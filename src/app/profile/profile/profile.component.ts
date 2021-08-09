import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData
  photoURL
  httpsRegex = /^(http|https):/

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required],),
    telephone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required])
  })

  photourlForm = new FormGroup({
    photoURL: new FormControl('', [Validators.required, Validators.pattern(this.httpsRegex)])
  })

  constructor(private profileService: ProfileService, private _snackBar: MatSnackBar) {
    this.profileService.getUserInfo().subscribe(data => {
      this.profileData = data;
      //console.log(this.profileData)
      this.photoURL = this.profileData.photoURL
      this.profileForm.patchValue({
        name: this.profileData.displayName,
        email: this.profileData.email,
        telephone: this.profileData.telephone,
        address: this.profileData.address,
        country: this.profileData.country,
        postalCode: this.profileData.postalCode
      })

      this.photoURL = this.profileService.takePhotoURL()
      /* this.photourlForm.patchValue({
        photoURL: this.profileData.photoURL
      }) */
    })
  }

  ngOnInit(): void {

  }

  openSnackbar(message,action) {
    this._snackBar.open(message, action);
  }


  onProfileUpdate(name, email, telephone, address, country, postalCode) {
    this.profileService.updateProfile(name, email, telephone, address, country, postalCode)
  }

  updateProfilePicture(url) {
    this.profileService.updatePicture(url)
    this.photoURL = this.profileService.takePhotoURL()
  }

}
