import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Coordinates from '../../components/coordinates/coordinates';
import Map from '../../components/map/map';
import DataDisplay from '../../components/data-display/data-display';
import './homepage.css';

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12} className='coordinates'>
        <Coordinates />
      </Grid>
      <Grid item xs={12} className='map'>
        <Map />
      </Grid>
      <Grid item xs={12} className='data-display'>
        <DataDisplay/>
      </Grid>
    </Grid>
  );
}

export default HomePage;