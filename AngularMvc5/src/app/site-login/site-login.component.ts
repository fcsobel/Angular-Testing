import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-site-login',
	templateUrl: './site-login.component.html',
	styleUrls: ['./site-login.component.less'],
	encapsulation: ViewEncapsulation.Emulated
})
export class SiteLoginComponent implements OnInit {

	max: number = 200;
	showWarning: boolean;
	dynamic: number;
	type: string;

	bsValue = new Date();
	bsRangeValue: Date[];
	maxDate = new Date();


	constructor() {
		// set progress bar
		this.random();

		// set default dates
		this.maxDate.setDate(this.maxDate.getDate() + 7);
		this.bsRangeValue = [this.bsValue, this.maxDate];
	}

	random(): void {
		let value = Math.floor(Math.random() * 100 + 1);
		let type: string;

		if (value < 25) {
			type = 'success';
		} else if (value < 50) {
			type = 'info';
		} else if (value < 75) {
			type = 'warning';
		} else {
			type = 'danger';
		}

		this.dynamic = value;
		this.type = type;
	}

	ngOnInit() {
	}

}
