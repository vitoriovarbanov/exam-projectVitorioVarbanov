import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  showClose = false;
  showCart = false;
  signedIn;
  userPhoto = new BehaviorSubject(null);
  photo;
  checkProfilePicture;

  @HostListener('window:click', ['$event.target'])
  onClick(e) {
    if (e.textContent === 'menu') {
      this.showClose = true
    } else {
      this.showClose = false
    }
  }

  constructor(public authService: FirebaseAuthService, private router: Router) {
    this.authService.signedIn$
      .subscribe(data => {
        this.signedIn = data
        if (this.signedIn === true) {
          this.checkProfilePicture = localStorage.getItem('photoURL')
          if(this.checkProfilePicture === 'null'){
            this.userPhoto.next('../../assets/profile-pic/profile.svg')
          }else{
            this.userPhoto.next(this.checkProfilePicture)
          }

          this.userPhoto.subscribe(value => {
            this.photo = value
          });
        }
      })

      router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        if(event.url.includes('shop')){
          this.showCart = true;
        }else{
          this.showCart = false;
        }
      });
  }

  logoutUser() {
    this.authService.logout()
  }
}
