import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
// The injector will be used to create new instances of the component that live independent of one another.
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GitreposComponent } from './gitrepos/gitrepos.component';
import { SiteLoginComponent } from './site-login/site-login.component';
import { SiteLogin2Component } from './site-login2/site-login2.component';
import { AlertModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms'; //<<<< import it here
import { ChartsModule } from 'ng2-charts';
import { ChartExample1Component } from './chart-example1/chart-example1.component';
let AppModule = class AppModule {
    //https://medium.freecodecamp.org/how-to-create-angular-6-custom-elements-web-components-c88814dc6e0a
    //https://scotch.io/tutorials/build-a-reusable-component-with-angular-elements
    constructor(injector) {
        // Angular provides the createCustomElement() function for converting an Angular component, together with its dependencies, 
        // to a custom element.The createCustomElement() function is expecting to get two parameter:
        // First, the Angular component which should be used to create the element.
        // Second, a configuration object.This object needs to include the injector property which is set to the current Injector instance.
        this.injector = injector;
        // the AppModule now has a constructor to set up the createCustomElement() function that takes the AppComponent and the injector.
        // The injector will be used to create new instances of the component that live independent of one another.
        // Then you define the custom element and the selector login - element that will be defined for its use in other applications.
        //const customElement1 = createCustomElement(GitreposComponent, { injector });
        //// We defined a custom element using the standard browser API customElements.define()
        //customElements.define('app-gitrepos', customElement1);
        //const customElement2 = createCustomElement(SiteLoginComponent, { injector });
        //// We defined a custom element using the standard browser API customElements.define()
        //customElements.define('app-site-login', customElement2);
        //const customElement3 = createCustomElement(SiteLogin2Component, { injector });
        //// We defined a custom element using the standard browser API customElements.define()
        //customElements.define('app-site-login2', customElement3);
    }
    // https://medium.com/learnwithrahul/ways-of-bootstrapping-angular-applications-d379f594f604
    // The last ngDoBootstrap() method circumvents the natural bootstrapping of the element 
    // since it won't be a regular Angular application.
    ngDoBootstrap() {
        const customElement1 = createCustomElement(GitreposComponent, { injector: this.injector });
        // We defined a custom element using the standard browser API customElements.define()
        customElements.define('app-gitrepos', customElement1);
        const customElement2 = createCustomElement(SiteLoginComponent, { injector: this.injector });
        customElements.define('app-site-login', customElement2);
        const customElement3 = createCustomElement(SiteLogin2Component, { injector: this.injector });
        customElements.define('app-site-login2', customElement3);
        const customElement4 = createCustomElement(ChartExample1Component, { injector: this.injector });
        customElements.define('app-chart-example1', customElement4);
    }
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent, GitreposComponent, SiteLoginComponent, SiteLogin2Component, ChartExample1Component],
        imports: [BrowserModule, HttpClientModule, ChartsModule, AlertModule.forRoot(), BsDatepickerModule.forRoot(), ProgressbarModule.forRoot(), FormsModule],
        providers: [],
        bootstrap: [],
        // https://scotch.io/tutorials/build-a-reusable-component-with-angular-elements
        entryComponents: [GitreposComponent, SiteLoginComponent, SiteLogin2Component, ChartExample1Component],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map