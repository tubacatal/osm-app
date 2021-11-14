import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { getBoundingBox, convertOsmToGeoJson } from '../../services/osm-services';

import './coordinates.css';

const Coordinates = () => {
  const handleClick = async (left, bottom, right, top) => {
    const osmData = await getBoundingBox(left, bottom, right, top);
    console.log(osmData);
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