import React, {useState} from 'react';
import {Radio, RadioGroup, FormControlLabel, FormControl, Grid, Typography, Box} from '@mui/material';

const ProviderItem = ({title, total, switcher, icon, minValue, onChange}) => {

    const [value, setValue] = useState(switcher.value1);
    const color = parseFloat(total) === parseFloat(minValue) ? '#1976d2' : '#E4E4E4';

    const handleChange = (event) => {
      setValue(event.target.value);
      onChange(event.target.value)
    };
    
    return (
        <Grid
            container spacing={2}
            item xs={3} md={12}
            sx={{alignItems: "center", flexDirection: {xs: 'column-reverse', md: 'row'}}}
        >
            <Grid item container xs md={3} alignItems="center">
                <Grid item>
                    <Typography variant="h6" sx={{fontSize: {xs: 16, md: 20}}}>{title}</Typography>
                    {switcher.type && 
                        <FormControl>
                            <RadioGroup value={value} onChange={handleChange}>
                                <FormControlLabel value={switcher.value1} control={<Radio />} label={switcher.value1} />
                                <FormControlLabel value={switcher.value2} control={<Radio />} label={switcher.value2} />
                            </RadioGroup>
                        </FormControl>
                    }
                </Grid>
                <Grid item xs={3}>
                    <img src={icon} alt="icon" style={{width: "100%"}}/>
                </Grid>
            </Grid>
            <Grid
                item md={9}
                sx={{minHeight: {xs: 650, md: 0}, display: 'flex', flexDirection: {xs: 'column-reverse', md: "row"}, textAlign: 'center'}}
            >
                <Box 
                    sx={{background: `${color}`, minWidth: 2, minHeight: 2, borderRadius: '20px', width: {xs: 30, md: `${total}%`}, height: {xs: `${total*8}px`, md: 30}}}
                >
                </Box>
                <Typography variant="h6" component="p" sx={{ml: {md: 2}, mb: {sx: 2, md: 0}}}>{total} $</Typography>
            </Grid>
        </Grid>
    )
}

ProviderItem.defaultProps = {
    switcher : {
        type: false,
        value1: '',
        value2: ''
    }
}

export default ProviderItem;