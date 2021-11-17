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
      color: "#FFFF00"
    },
  },
  polygon: {
    shapeOptions: {
      color: "#FFFF00"
    },
  },
  rectangle: {
    shapeOptions: {
      color: "#FFFF00"
    },
  },
  circle: {
    shapeOptions: {
      color: "#FFFF00"
    },
  },
  marker: false,
  circlemarker: false,
};

export const EDIT_OPTIONS = {
  remove: false,
};