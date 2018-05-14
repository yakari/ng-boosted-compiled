/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Component, Input, HostListener } from '@angular/core';
var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.onWindowScroll = function () {
        if (document.documentElement.scrollTop > window.innerHeight) {
            this.showMe = true;
        }
        else {
            this.showMe = false;
        }
    };
    return ScrollTopComponent;
}());
export { ScrollTopComponent };
//# sourceMappingURL=scroll-top.component.js.map