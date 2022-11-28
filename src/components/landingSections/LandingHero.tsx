import React from "react";
import {
    Button,
    Container,
    Box,
    Typography,
    Grid,
} from "@mui/material";

const LandingHero = () => {
    return (
        <Box className="bg-primary" sx={{paddingTop: "30px", paddingBottom: "30px"}}>
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="h1" fontSize={48} sx={{paddingBottom: "22px"}}>Welcome to the World's best Website</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Button id="primary-btn">Get Started</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LandingHero;
