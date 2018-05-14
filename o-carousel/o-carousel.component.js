/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Component, Injectable, Inject, ElementRef, Host, AfterViewInit } from '@angular/core';
import { OCarouselContainerComponent } from './o-carousel-container.component';
var OCarouselComponent = /** @class */ (function () {
    function OCarouselComponent(elementRef, swiper) {
        this.elm = elementRef.nativeElement;
        this.swiper = swiper;
    }
    OCarouselComponent.prototype.ngAfterViewInit = function () {
        this.elm.classList.add('swiper-slide');
        this.swiper.update();
    };
    return OCarouselComponent;
}());
export { OCarouselComponent };
//# sourceMappingURL=o-carousel.component.js.map