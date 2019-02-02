import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.less']
})
export class MapTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	options = {
		layers: [
			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; OpenStreetMap contributors'
			})
		],
		zoom: 7,
		center: latLng([46.879966, -121.726909])
	};

}
