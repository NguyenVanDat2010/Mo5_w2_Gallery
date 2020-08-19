import { Component, OnInit, QueryList, ContentChildren, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { ImgSlideComponent } from './img-slide/img-slide.component';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent implements OnInit, AfterContentInit {
  img = "https://via.placeholder.com/1280x420/e91e63/ffffff?text=1";

  @ContentChildren(ImgSlideComponent) slides: QueryList<ImgSlideComponent>
  component;
  activeIndex = 0;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previos() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
}
