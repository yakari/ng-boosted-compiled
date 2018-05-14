/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Component, Input, Injectable, Inject, ElementRef, Host, OnInit } from '@angular/core';
import Swiper from 'swiper';
var OCarouselContainerComponent = /** @class */ (function () {
    function OCarouselContainerComponent(elementRef) {
        this.elementRef = elementRef;
    }
    OCarouselContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var nativeElement = this.elementRef.nativeElement;
        setTimeout(function () {
            _this.swiper = new Swiper(nativeElement.children[0], _this.options);
        });
    };
    OCarouselContainerComponent.prototype.update = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiper.update();
        });
    };
    return OCarouselContainerComponent;
}());
export { OCarouselContainerComponent };
//# sourceMappingURL=o-carousel-container.component.js.map