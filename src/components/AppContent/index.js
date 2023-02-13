import React from 'react';
import { Container, Grid } from '@mui/material';

import SliderWrapper from 'components/SliderWrapper';
import ProviderWrapper from 'components/ProvidersWrapper';

const AppContent = () => {
    return (
        <Container>
            <Grid
                container
                sx={{
                    p:'30px',
                    m:"100px 0",
                    background:"#fff",
                    boxShadow: "0px 20px 100px rgba(0, 0, 0, 0.3)",
                    borderRadius: "20px",
                    flexDirection: {xs: 'column-reverse', md: 'column'}
                }}
            >
                <SliderWrapper />
                <ProviderWrapper />
            </Grid>
        </Container>
    );
}

export default AppContent;