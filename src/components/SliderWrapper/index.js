import React from 'react';
import { Grid } from '@mui/material';
import SliderItem from 'components/SliderItem';

const SliderWrapper = () => {
    return (
        <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{mt: {xs: 4, md: 0}, mb: {md: 4}}}
        >
            <SliderItem type={'Storage'}/>
            <SliderItem type={'Transfer'}/>
        </Grid>
    );
}

export default SliderWrapper;