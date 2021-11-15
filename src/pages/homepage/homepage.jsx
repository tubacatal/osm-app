import * as React from 'react';
import Grid from '@mui/material/Grid';
import Map from '../../components/map/map';
import './homepage.css';

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12} className='map'>
        <Map />
      </Grid>
    </Grid>
  );
}

export default HomePage;