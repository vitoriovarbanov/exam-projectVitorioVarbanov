import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showClose = false;

  @HostListener('window:click', ['$event.target'])
  onClick(e) {
    if (e.textContent === 'menu') {
      this.showClose = true
    } else {
      this.showClose = false
    }
  }

  constructor(public authService: FirebaseAuthService, private router: Router) {
  }

  ngOnInit(): void {
  }
}
