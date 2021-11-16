import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, FeatureGroup, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { MdWarning } from 'react-icons/md';
import { OSM, DRAW_OPTIONS } from '../../assets/consts';
import { addShape } from '../../store/map/action';
import GeoJSONComponent from './geojson/geojson';
import MarkerComponent from './marker/marker';
import NotificationToast from '../toaster/toaster';
import { fetchBoundingBox, convertOsmToGeoJson } from "../../services/osm-services";

import './map.css';

const Map = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.map.shapes);

  const handleCreated = async (e) => {
    const bounds = e.layer.getBounds();
    // get bbox from the bounds
    const bbox = bounds.toBBoxString();
    const bboxData = bbox?.split(',');
    // api call to fetch osm data for bbox, convert it to geojson
    const bBoxOsmData = await fetchBoundingBox(bboxData[0], bboxData[1], bboxData[2], bboxData[3]);
    const geoJSONData = convertOsmToGeoJson(bBoxOsmData);
    // dispatch the data even geoJson is false - to render the marker at the center
    dispatch(addShape({
      center: bounds.getCenter(),
      geoJSON: geoJSONData,
    }));
  };

  const handleEdited = (e) => {
    const editedlayers = e.layers;
    editedlayers.eachLayer((layer) => {
      NotificationToast({
        content: <h5>Shape Edited</h5>,
        type: 'info',
        autoClose: 5000,
      }); 
    });
  };

  const handleDeleted = (e) => {
    const deletedlayers = e.layers;
    deletedlayers.eachLayer((layer) => {
      NotificationToast({
        content: <h5>Shape Deleted</h5>,
        type: 'warning',
        autoClose: 5000,
      }); 
    });
  };

  return (
    <MapContainer center={OSM.center} zoom={OSM.zoomLevel} scrollWheelZoom={false} className="map">
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handleCreated}
          onEdited={handleEdited}
          onDeleted={handleDeleted}
          draw={DRAW_OPTIONS}
        />
      </FeatureGroup>
      {data?.map((shape, index) => <GeoJSONComponent key={index} data={shape?.geoJSON} />)}
      {data?.map((shape, index) => <MarkerComponent key={index} position={[shape?.center?.lat, shape?.center?.lng]} />)}
      <TileLayer attribution={OSM.attribution} url={OSM.url} />
    </MapContainer>
  );
}

export default Map;