import React from 'react';
import { useDispatch } from 'react-redux';
import { MapContainer, FeatureGroup, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { OSM, DRAW_OPTIONS } from '../../assets/consts';
import { addShape } from '../../store/map/action';

import MarkerComponent from './marker/marker';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import './map.css';

const Map = () => {
  const dispatch = useDispatch();

  const handleCreated = (e) => {
    if (e.layerType === 'rectangle') {
      // get bbox from rectangle
      const bounds = e.layer.getBounds();
      dispatch(addShape({
        shape: e,
        bounds: {
          'northWest': bounds.getNorthWest(),
          'northEast': bounds.getNorthEast(),
          'southEast': bounds.getSouthEast(),
          'southWest': bounds.getSouthWest(),
        }
      }));
    }
  };

  const handleEdited = (e) => {
    console.log(e);
  };

  return (
    <MapContainer center={OSM.center} zoom={OSM.zoomLevel} scrollWheelZoom={false} className="map">
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handleCreated}
          onEdited={handleEdited}
          draw={DRAW_OPTIONS}
        />
      </FeatureGroup>
      <MarkerComponent position={OSM.center} />
      <TileLayer attribution={OSM.attribution} url={OSM.url} />
    </MapContainer>
  );
}

export default Map;