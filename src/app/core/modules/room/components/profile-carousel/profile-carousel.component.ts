import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mw-profile-carousel',
  standalone: true,
  imports: [],
  templateUrl: './profile-carousel.component.html',
  styleUrl: './profile-carousel.component.css',
})
export class ProfileCarouselComponent implements OnInit {
  @Output() imageChange = new EventEmitter<string>();

  protected images = [
    'https://midway-gpt.s3.us-east-2.amazonaws.com/profile+bot.png',
    'https://midway-gpt.s3.us-east-2.amazonaws.com/midway+assistant+2.png',
    'https://midway-gpt.s3.us-east-2.amazonaws.com/midway+assistant+3.png',
    'https://midway-gpt.s3.us-east-2.amazonaws.com/midway+assistant+4.png',
  ];
  protected currentIndex = 0;

  ngOnInit(): void {
    this.send();
  }

  protected next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.send();
  }
  protected previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.send();
  }

  protected send() {
    this.imageChange.emit(this.images[this.currentIndex]);
  }
}
