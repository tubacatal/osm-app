const BERLIN = [52.531677, 13.381777];

export const OSM = {
	url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	zoomLevel: 18,
	center: BERLIN,
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}

export const DRAW_OPTIONS = {
  polyline: true,
  polygon: true,
  rectangle: true,
  circle: false,
  marker: false,
  circlemarker: false,
};