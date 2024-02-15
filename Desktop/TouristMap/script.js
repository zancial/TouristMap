let placemark_guk = [56.844058833520016, 60.65398059317325];

function init() {
	let map = new ymaps.Map("map-test", {
		center: [56.844058833520016, 60.65398059317325],
		zoom: 17
	});

	let placemark = new ymaps.Placemark(placemark_guk, {}, {
		iconLayout: "default#image",
		iconImageHref: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
		iconImageSize: [40, 40],
		iconImageOffset: [-20, -35]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил

	map.geoObjects.add(placemark);
}
ymaps.ready(init);

