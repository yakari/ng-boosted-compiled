/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-dropdown.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Directive, HostListener, ElementRef, AfterViewInit } from '@angular/core';
var ODropdownComponent = /** @class */ (function () {
    function ODropdownComponent(elRef) {
        this.elRef = elRef;
    }
    ODropdownComponent.prototype.ngAfterViewInit = function () {
        this.dropdownMenu = this.elRef.nativeElement.querySelectorAll('.dropdown-menu')[0];
    };
    ODropdownComponent.prototype.handleDropdownFocus = function (isOpenEvent) {
        var _this = this;
        if (isOpenEvent) {
            setTimeout(function () {
                _this.dropdownMenu.firstElementChild.focus();
            });
        }
    };
    return ODropdownComponent;
}());
export { ODropdownComponent };
//# sourceMappingURL=o-dropdown.component.js.map