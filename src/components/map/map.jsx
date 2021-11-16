import L from 'leaflet';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, FeatureGroup, TileLayer, GeoJSON } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { OSM, DRAW_OPTIONS } from '../../assets/consts';
import { addShape } from '../../store/map/action';
import MarkerComponent from './marker/marker';
import { fetchBoundingBox, convertOsmToGeoJson } from "../../services/osm-services";
import icon from '../../assets/images/marker-icon.png';
import iconRetina from '../../assets/images/marker-icon-2x.png';
import iconShadow from '../../assets/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import './map.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow
});

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
    dispatch(addShape({
      center: bounds.getCenter(),
      geoJSON: geoJSONData,
    }));
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
      {data?.map((shape, index) => 
        <div key={index}>
          <GeoJSON data={shape?.geoJSON} />
          <MarkerComponent position={[shape?.center?.lat, shape?.center?.lng]} />
        </div>
      )}
      <TileLayer attribution={OSM.attribution} url={OSM.url} />
    </MapContainer>
  );
}

export default Map;