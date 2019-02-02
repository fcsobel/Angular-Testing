import { async, TestBed } from '@angular/core/testing';
import { ChartExample1Component } from './chart-example1.component';
describe('ChartExample1Component', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChartExample1Component]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChartExample1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chart-example1.component.spec.js.map