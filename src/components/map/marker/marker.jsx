import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import { fetchAddress } from "../../../services/osm-services";

import icon from '../../../assets/images/marker-icon.png';
import iconRetina from '../../../assets/images/marker-icon-2x.png';
import iconShadow from '../../../assets/images/marker-shadow.png';

const customIcon = new Icon({
	iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow, 
	iconSize: [25, 41]
});

const MarkerComponent = ({ position }) => {
	const [popupContent, setPopupContent] = useState("Address couldn't be found.");

	const onClickHandler = async () => {
		const response = await fetchAddress(position[0], position[1]);
		if (response?.display_name) setPopupContent(response?.display_name);
	};

  return (
    <Marker position={position} icon={customIcon} eventHandlers={{ click: onClickHandler }}>
      <Popup>{popupContent}</Popup>
    </Marker>
  )
}

export default MarkerComponent;