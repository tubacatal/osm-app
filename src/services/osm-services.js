import axios from 'axios';
import osmtogeojson from 'osmtogeojson';
import NotificationToast from '../components/toaster/toaster';

const fetchBoundingBox = async (left, bottom, right, top) => {
	try {
		const { data } = await axios({
			method: 'get',
			url: `https://www.openstreetmap.org/api/0.6/map/?bbox=${left},${bottom},${right},${top}`,
			timeout: 15000,
		});
		return data;
	} catch (e) {
		const message = e?.message;
		if (message?.includes('timeout'))
			NotificationToast({
				content: <h5>Bounding box fetch has been timed out!</h5>,
				type: 'warning',
				autoClose: 5000,
			});
		else 
			NotificationToast({
				content: <h5>Error in bounding box fetch!</h5>,
				type: 'error',
				autoClose: 5000,
			});
		return false;
	}
};

const fetchAddress = async (lat, lon) => {
	try {
		const { data } = await axios({
			method: 'get',
			url: `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
			timeout: 5000,
		});
		return data;
	} catch (e) {
		const message = e?.message;
		if (message?.includes('timeout'))
			NotificationToast({
				content: <h5>Address fetch has been timed out!</h5>,
				type: 'warning',
				autoClose: 5000,
			});
		else 
			NotificationToast({
				content: <h5>Error in address fetch!</h5>,
				type: 'error',
				autoClose: 5000,
			});
		return false;
	}
};

const convertOsmToGeoJson = (osmData) => {
	try {
		const geoJson = osmtogeojson(osmData);
		return geoJson;
	} catch (e) {
		NotificationToast({
			content: <h5>Error in geoJSON conversion!</h5>,
			type: 'error',
			autoClose: 5000,
		});
		return false;
	}
};

export { fetchBoundingBox, fetchAddress, convertOsmToGeoJson };