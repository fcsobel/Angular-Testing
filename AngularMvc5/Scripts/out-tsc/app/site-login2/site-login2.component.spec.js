import { async, TestBed } from '@angular/core/testing';
import { SiteLogin2Component } from './site-login2.component';
describe('SiteLogin2Component', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SiteLogin2Component]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SiteLogin2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=site-login2.component.spec.js.map