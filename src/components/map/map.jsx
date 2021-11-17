import L from 'leaflet';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, FeatureGroup, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { OSM, DRAW_OPTIONS, EDIT_OPTIONS } from '../../assets/consts';
import { addShape, deleteShape, updateShape } from '../../store/map/action';
import GeoJSONComponent from './geojson/geojson';
import MarkerComponent from './marker/marker';
import { fetchBoundingBox, convertOsmToGeoJson } from "../../services/osm-services";

import './map.css';

const Map = () => {
  const dispatch = useDispatch();
  const shapesData = useSelector(state => state.map.shapes);
  const text = L.divIcon({
    iconSize:null,
    iconAnchor: [25, 25],
    html: "<h5>Loading...</h5>"
  });

  const handleGeoJSONFetch = useCallback(async (layer) => {
    // get bbox from the bounds
    const bbox = layer.getBounds().toBBoxString();
    const bboxData = bbox?.split(',');
    // api call to fetch osm data for bbox, convert it to geojson
    const bBoxOsmData = await fetchBoundingBox(bboxData[0], bboxData[1], bboxData[2], bboxData[3]);
    // if the API call is successful, proceed. otherwise, change color of the shape for visual warning
    if (bBoxOsmData) {
      const geoJSONData = convertOsmToGeoJson(bBoxOsmData);
      if (geoJSONData) {
        // update shape from store
        dispatch(updateShape(layer._leaflet_id, {
          center: layer.getBounds().getCenter(),
          isLoading: false,
          geoJSON: geoJSONData,
        }));
      } else {
        // in case of error on geojson conversion, hit here and clear store and layer
        dispatch(deleteShape(layer._leaflet_id));
        layer.remove();
      }
    } else {
      // in case of error on bbox, hit here and clear store and layer
      dispatch(deleteShape(layer._leaflet_id));
      layer.remove();
    }
  }, [dispatch]);

  const handleCreated = (e) => {
    const layer = e.layer;
    // create shape in store
    dispatch(addShape(e.layer._leaflet_id, {
      center: layer.getBounds().getCenter(),
      isLoading: true,
      geoJSON: false,
    }));
    // handle data fetch and update store accordingly
    handleGeoJSONFetch(layer);
  };

  const handleEdited = (e) => {
    const editedlayers = e.layers;
    editedlayers.eachLayer(async (layer) => {
      // update layer as loading
      dispatch(updateShape(layer._leaflet_id, {
        center: layer.getBounds().getCenter(),
        isLoading: true,
        geoJSON: false,
      }));
      // handle data fetch and update store accordingly
      handleGeoJSONFetch(layer);
    });
  };

  const handleDeleted = (e) => {
    const deletedlayers = e.layers;
    // remove data from store to update the state and clear related geojson
    deletedlayers.eachLayer((layer) => {
      // dispatch(deleteShape(layer._leaflet_id));
    });
  };

  return (
    <MapContainer center={OSM.center} zoom={OSM.zoomLevel} scrollWheelZoom={false} className="map">
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handleCreated}
          onEdited={handleEdited}
          // onDeleted={handleDeleted}
          draw={DRAW_OPTIONS}
          edit={EDIT_OPTIONS}
        />
      </FeatureGroup>
      {
        Object.values(shapesData)?.map((shape, index) => 
          shape?.geoJSON ?
          <GeoJSONComponent key={index} data={shape?.geoJSON} />
          : null
      )}
      {
        Object.values(shapesData)?.map((shape, index) => 
          shape?.isLoading ?
            <MarkerComponent 
              key={index} 
              icon={text}
              position={[shape?.center?.lat, shape?.center?.lng]}
            /> 
            : null
      )}
      <TileLayer attribution={OSM.attribution} url={OSM.url} />
    </MapContainer>
  );
}

export default Map;