let position_person = [];
let placemark_guk = [56.844058833520016, 60.65398059317325];

function init() {
	let map = new ymaps.Map("map-test", {
		center: [56.844058833520016, 60.65398059317325],
		zoom: 17,
		controls: ["routePanelControl"]
	});

	let control = map.controls.get('routePanelControl');

	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		const crd = pos.coords;
		let reverseGeocoder = ymaps.geocode([crd.latitude, crd.longitude]);
		let locationText = null;
		reverseGeocoder.then(function (res) {
			locationText = res.geoObjects.get(0).properties.get('text')
			console.log(locationText)

			control.routePanel.state.set({
				type: 'masstransit',
				fromEnabled: false,
				from: locationText,
				toEnabled: true,
				to: `Екатеринбург, Мира 19`,
			});
		});

		console.log(locationText)

		control.routePanel.options.set({
			types: {
				masstransit: true,
				pedestrian: true,
				taxi: true,
				auto: true
			}
		})
	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);

	let placemark = new ymaps.Placemark(placemark_guk, {
		balloonContentHeader: "Привет",
		balloonContentBody: [
			"<img src = 'http://viu.tsu.ru/upload/resize_cache/iblock/1d8/300_1000_1/1d851be685e04b32be320012ba967b83.png' />",
			"Привет",
		].join(""),
		balloonContentFooter: "Привет",
		hintContent: "Уральский Федеральный Университет",
	}, {
		iconLayout: "default#image",
		iconImageHref: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
		iconImageSize: [40, 40],
		iconImageOffset: [-20, -35]
	});

	map.controls.remove('geolocationControl');
	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('fullscreenControl');
	map.controls.remove('zoomControl');
	map.controls.remove('rulerControl');

	map.geoObjects.add(placemark);
}
ymaps.ready(init);