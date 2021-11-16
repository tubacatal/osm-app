import L from 'leaflet';
import React, { useState } from "react";
import { GeoJSON, Popup } from "react-leaflet";
import { fetchAddress } from "../../../services/osm-services";

import icon from '../../../assets/images/marker-icon.png';
import iconRetina from '../../../assets/images/marker-icon-2x.png';
import iconShadow from '../../../assets/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow
});

const GeoJSONComponent = ({ data }) => {
	const [popupContent, setPopupContent] = useState("Address couldn't be found.");

	const onClickHandler = async (e) => {
		const response = await fetchAddress(e?.latlng?.lat, e?.latlng?.lng);
		if (response?.display_name) setPopupContent(response?.display_name);
	};

  return (
    <GeoJSON pathOptions={{ color: "green" }} data={data} eventHandlers={{ click: (e) => onClickHandler(e) }}>
			<Popup>{popupContent}</Popup>
		</GeoJSON>
  )
}

export default GeoJSONComponent;