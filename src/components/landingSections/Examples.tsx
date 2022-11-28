import React from 'react'
import {
    Container,
    Box,
    Typography,
    Grid,
} from "@mui/material";

const Examples = () => {

    return (
        <Box className="bg-primary" sx={{padding: "0 30px"}}>
            <Container maxWidth="lg">
            <Typography variant="h2" fontSize={32} sx={{width: "100%", textAlign: "center"}}>Examples</Typography>
                <Container sx={{display: "flex", justifyContent: "center"}}>
                <Grid container >
                    <Grid item xs={12}>
                        <img src="https://www.mydomaine.com/thmb/iGBxW0VsFdj6kfypVMkKgIeTeDw=/2134x1405/filters:fill(auto,1)/GettyImages-173052018-0a6ac213984e4a999d4f669fc429ae7a.jpg" alt='placeholder' className='example-pic'/>
                    </Grid>
                    <Grid item xs={12}>
                        <img src="https://www.mydomaine.com/thmb/iGBxW0VsFdj6kfypVMkKgIeTeDw=/2134x1405/filters:fill(auto,1)/GettyImages-173052018-0a6ac213984e4a999d4f669fc429ae7a.jpg" alt='placeholder' className='example-pic'/>
                    </Grid>
                    <Grid item xs={12}>
                        <img src="https://www.mydomaine.com/thmb/iGBxW0VsFdj6kfypVMkKgIeTeDw=/2134x1405/filters:fill(auto,1)/GettyImages-173052018-0a6ac213984e4a999d4f669fc429ae7a.jpg" alt='placeholder' className='example-pic'/>
                    </Grid>
                </Grid>
                </Container>
            </Container>
        </Box>
    )
}

export default Examples