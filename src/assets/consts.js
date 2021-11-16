const BERLIN = [52.531677, 13.381777];

export const OSM = {
	url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	zoomLevel: 11,
	center: BERLIN,
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}

export const DRAW_OPTIONS = {
  polyline: {
    shapeOptions: {
        color: "#ff0000"
    },
  },
  polygon: {
    shapeOptions: {
        color: "#ff0000"
    },
  },
  rectangle: {
    shapeOptions: {
        color: "#ff0000"
    },
  },
  circle: {
    shapeOptions: {
        color: "#ff0000"
    },
  },
  marker: false,
  circlemarker: false,
};