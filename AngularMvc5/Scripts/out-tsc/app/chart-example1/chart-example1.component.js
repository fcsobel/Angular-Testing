import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ChartExample1Component = 
// Angular2 directives for Chart.js
//https://valor-software.com/ng2-charts/
//https://alligator.io/angular/chartjs-ng2-charts/
//https://medium.com/codingthesmartway-com-blog/angular-chart-js-with-ng2-charts-e21c8262777f
class ChartExample1Component {
    constructor() {
        // lineChart
        // 
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        this.lineChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
    }
    randomizeType() {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    }
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
    ngOnInit() {
    }
};
ChartExample1Component = tslib_1.__decorate([
    Component({
        selector: 'app-chart-example1',
        templateUrl: './chart-example1.component.html',
        styleUrls: ['./chart-example1.component.less']
    })
    // Angular2 directives for Chart.js
    //https://valor-software.com/ng2-charts/
    //https://alligator.io/angular/chartjs-ng2-charts/
    //https://medium.com/codingthesmartway-com-blog/angular-chart-js-with-ng2-charts-e21c8262777f
    ,
    tslib_1.__metadata("design:paramtypes", [])
], ChartExample1Component);
export { ChartExample1Component };
//# sourceMappingURL=chart-example1.component.js.map