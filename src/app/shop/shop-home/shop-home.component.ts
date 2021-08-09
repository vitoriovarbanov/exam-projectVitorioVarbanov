import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {
  Imagedata = [
    '../../../assets/shop-home/header-top/888.jpg',
    '../../../assets/shop-home/header-top/444.jpg',
    '../../../assets/shop-home/header-top/555.jpg',
    '../../../assets/shop-home/header-top/777.jpg',
  ]

  images = [
    { src: "../../../assets/shop-home/categories/8.jpg", alt: 'display-alt-text-here', text: 'Food and Beverages', link: 'foodbeverages' },
    { src: "../../../assets/shop-home/categories/9.jpg", alt: 'display-alt-text-here', text: 'Herbs and Botanicals', link: 'herbs' },
    { src: "../../../assets/shop-home/categories/10.jpg", alt: 'display-alt-text-here', text: 'Beauty and Personal care', link: '' },
    { src: "../../../assets/shop-home/categories/5.jpg", alt: 'display-alt-text-here', text: 'Sports and Fitness', link: 'sports' },
    { src: "../../../assets/shop-home/categories/11.jpg", alt: 'display-alt-text-here', text: 'Vitamins and Supplements', link: '' },
    { src: "../../../assets/shop-home/categories/12.jpg", alt: 'display-alt-text-here', text: 'Superfoods', link: '' },
    { src: "../../../assets/shop-home/categories/13.jpg", alt: 'display-alt-text-here', text: 'Diet', link: '' },
  ]

  constructor(private firestoreDatabase: AngularFirestore, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.Repeat()
  }


  Repeat() {
    if (window.location.href === 'http://localhost:4200/shop') {
      setTimeout(() => {
        this.__FunctionSlide();
        this.Repeat();

      }, 2000);
    }
  }

  startIndex = 0;

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

}
