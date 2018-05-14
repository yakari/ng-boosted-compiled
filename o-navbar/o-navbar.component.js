/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Directive, Component, Input, HostBinding, ElementRef, ViewChild, DoCheck } from '@angular/core';
var TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;
var ONavLink = /** @class */ (function () {
    function ONavLink() {
    }
    ONavLink.prototype.ngDoCheck = function () {
        this.isActive = this.link.nativeElement.classList.contains('active');
    };
    return ONavLink;
}());
export { ONavLink };
var ONavMenu = /** @class */ (function () {
    function ONavMenu() {
    }
    return ONavMenu;
}());
export { ONavMenu };
var ONavbarComponent = /** @class */ (function () {
    function ONavbarComponent() {
    }
    return ONavbarComponent;
}());
export { ONavbarComponent };
//# sourceMappingURL=o-navbar.component.js.map