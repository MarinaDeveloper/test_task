import React, {useContext} from 'react';
import { Grid, Typography, Slider } from '@mui/material';
import { Context } from 'components/App';

const SliderItem = ({type}) => {
    const contextValue = useContext(Context);
    const value = type === 'Storage' ? contextValue.storage : contextValue.transfer;

    const handleChange = (e, newValue) => {
        type === 'Storage' ? contextValue.setStorage(newValue) : contextValue.setTransfer(newValue);
    };
        
    return (
        <Grid item xs={10} md={5}>
            <Typography variant="h6" component="p" gutterBottom>
                {type}: {value} GB
            </Typography>
            <Slider
                value={value}
                min={0}
                step={1}
                max={1000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            />
        </Grid>
    );
}

export default SliderItem;