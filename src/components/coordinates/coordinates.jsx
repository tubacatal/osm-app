import * as React from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { fetchBoundingBox, convertOsmToGeoJson } from '../../services/osm-services';
import { addShape } from '../../store/map/action';

import './coordinates.css';

const Coordinates = () => {
  const dispatch = useDispatch();

  const handleClick = async (left, bottom, right, top) => {
    const osmData = await fetchBoundingBox(left, bottom, right, top);
    console.log(osmData);
    dispatch(addShape('1'));
    dispatch(addShape('2'));
    dispatch(addShape('3'));

    if (osmData) {
      const geoJson = convertOsmToGeoJson(osmData);
      console.log(geoJson);
    }
  }

  return (
    <Paper className='coordinates'>
      <Button onClick={() => handleClick(7.84767, 47.70192, 7.86040, 47.70632)}>Api Call</Button>
    </Paper>
  );
}

export default Coordinates;