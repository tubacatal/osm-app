# Getting Started with Create React App

This project was bootstrapped with Create React App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

## Notes

Interactive map with OSM layers and react-leaflet library.

Please draw shapes using the toolbar. 
With each shape creation, https://www.openstreetmap.org/api/0.6/map/ API will be used with the associated bbox values. 
Please note that the timeout limit for this call is 15 seconds.

[TODO] From shape creation to geoJSON rendering, the 'loading' marker is displayed. It is not properly shaped.
[TODO] Prevent shape edit/delete during the 'isLoading' state.

You can edit shapes. Editing will clear the existing geoJSON and make a new API call with updated values.

[TODO] Delete case has problems, it only clears the layer, not the geoJSON so it is disabled for now.

GeoJSON nodes have an on-click event to fetch the address of the coordinates using https://nominatim.openstreetmap.org/reverse/ API.
Please note that the timeout limit for this call is 5 seconds.

[TODO] Map and store structured to support multiple shapes but when too much data exists on the map, performance issues occur. It can be limited to support 1 layer at a time.





