# Getting Started with Create React App

This project was bootstrapped with Create React App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

## Notes

Interactive map with OSM layers and react-leaflet library.

Please draw shapes using the toolbar. 
With each shape creation, https://www.openstreetmap.org/api/0.6/map/ api will be used with the associated bbox values. 
Please note that, the timeout limit for this call is 15 seconds.
[TODO] From shape creation to geoJSON rendering, 'loading' marker is displayed. It is not properly centeralized.
[TODO] Prevent shape edit/delete during 'isLoading' state.

You can edit and delete shapes. Editing will clear the existing geoJSON and make a new api call with updated values.
[TODO] Delete case has problems, it only clears the layer not the geoJSON.

GeoJSON nodes has onclick event to fetch the address of the coordinates using https://nominatim.openstreetmap.org/reverse/ api.
Please note that, the timeout limit for this call is 5 seconds.

[TODO] Map and store structured to support multiple shapes but when too many data exists on the map, performance issues occurs.
It can be limited to support 1 layer at a time.





