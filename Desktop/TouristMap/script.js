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

	map.controls.remove('geolocationControl'); // ������� ����������
	map.controls.remove('searchControl'); // ������� �����
	map.controls.remove('trafficControl'); // ������� �������� �������
	map.controls.remove('typeSelector'); // ������� ���
	map.controls.remove('fullscreenControl'); // ������� ������ �������� � ������������� �����
	map.controls.remove('zoomControl'); // ������� ������� ������������
	map.controls.remove('rulerControl'); // ������� ������� ������

	map.geoObjects.add(placemark);
}
ymaps.ready(init);

