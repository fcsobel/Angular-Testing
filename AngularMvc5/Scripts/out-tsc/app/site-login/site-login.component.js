import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let SiteLoginComponent = class SiteLoginComponent {
    constructor() {
        this.max = 200;
        this.bsValue = new Date();
        this.maxDate = new Date();
        // set progress bar
        this.random();
        // set default dates
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }
    random() {
        let value = Math.floor(Math.random() * 100 + 1);
        let type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.dynamic = value;
        this.type = type;
    }
    ngOnInit() {
    }
};
SiteLoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-site-login',
        templateUrl: './site-login.component.html',
        styleUrls: ['./site-login.component.less'],
        encapsulation: ViewEncapsulation.Emulated
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SiteLoginComponent);
export { SiteLoginComponent };
//# sourceMappingURL=site-login.component.js.map