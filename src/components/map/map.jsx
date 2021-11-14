import React from 'react';
import { MapContainer, FeatureGroup, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { OSM, DRAW_OPTIONS } from '../../assets/consts';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import './map.css';


const Map = () => {
  const handleCreated = (e) => {
    // get bbox from rectangle
    const bbox = e.layer.getBounds().toBBoxString();
    console.log(bbox);
  };

  return (
    <MapContainer center={OSM.center} zoom={OSM.zoomLevel} scrollWheelZoom={false} className="map">
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handleCreated}
          draw={DRAW_OPTIONS}
        />
      </FeatureGroup>
      <TileLayer attribution={OSM.attribution} url={OSM.url} />
    </MapContainer>
  );
}

export default Map;