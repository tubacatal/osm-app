import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { BERLIN } from '../../assets/consts';
import 'leaflet/dist/leaflet.css';
import './map.css';


const Map = () => {
  return (
    <MapContainer center={BERLIN} zoom={11} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;