import React from 'react'
import {
    Container,
    Box,
    Typography,
    Grid,
} from "@mui/material";

const HowItWorks = () => {

    return (
        <Box sx={{paddingTop: "30px", paddingBottom: "30px"}}>
            <Container maxWidth="lg" >
                <Typography variant="h2" fontSize={32} sx={{width: "100%", textAlign: "center"}}>How it Works</Typography>
                <Container sx={{display: "flex", justifyContent: "center"}}>
                <Grid container >
                    <Grid item xs={12} md={4}>
                        1.
                    </Grid>
                    <Grid item xs={12} md={4}>
                        2.
                    </Grid>
                    <Grid item xs={12} md={4}>
                        3.
                    </Grid>
                </Grid>
                </Container>
            </Container>
        </Box>
    )
}

export default HowItWorks