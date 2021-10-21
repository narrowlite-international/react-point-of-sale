import React from "react";
import { withRouter } from "react-router";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "material-ui/Paper";
import Box from '@mui/material/Box';



// View: ProductSetup
function SetupFormParent (props) {

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h4" sx={{padding: 2}}>
                {props.title}
            </Typography>
            <Paper>
                <Typography variant="subtitle1" sx={{padding: 3}}>
                    Setup New {props.title.split(" ")[0]}
                </Typography>

                <div style={{ width: '100%' }}>
                    <Box sx={{ display: 'grid', gap: 2, marginLeft: 5, marginRight: 5,flexGrow: 1}}>
                        {props.children}
                    </Box>
                </div>
        

            </Paper>
            
        </Container>
    );
}

export default withRouter(SetupFormParent);

