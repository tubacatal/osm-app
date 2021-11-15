import axios from 'axios';
import osmtogeojson from 'osmtogeojson';

const fetchBoundingBox = async (left, bottom, right, top) => {
	try {
		const { data } = await axios({
			method: 'get',
			url: `https://www.openstreetmap.org/api/0.6/map/?bbox=${left},${bottom},${right},${top}`,
		});
		return data;
	} catch (e) {
		return false;
	}
};

const fetchAddress = async (lat, lon) => {
	try {
		const { data } = await axios({
			method: 'get',
			url: `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
		});
		return data;
	} catch (e) {
		return false;
	}
};

const convertOsmToGeoJson = (osmData) => {
	try {
		const geoJson = osmtogeojson(osmData);
		return geoJson;
	} catch (e) {
		return false;
	}
};

export { fetchBoundingBox, fetchAddress, convertOsmToGeoJson };