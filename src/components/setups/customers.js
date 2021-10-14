import React from "react";
import { withRouter } from "react-router";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import TextField from '@mui/material/TextField';
import SetupFormParent from "./setupformparent";


// View: CustomerSetup
function CustomerSetup ( props ) {

    return (
        <SetupFormParent {...props}>
            <FormControl >
                <InputLabel htmlFor="customer_name-input">Customer Name</InputLabel>
                <Input id="customer_name-input" aria-describedby="customer-name" />
                <FormHelperText >Enter Your Customer Name here.</FormHelperText>
                </FormControl>
                
                <FormControl>
                    <InputLabel htmlFor="contact-input">Contact</InputLabel>
                    <Input id="contact-input" aria-describedby="contact" />
                    <FormHelperText >Contact here.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="measuring-unit-input">Location</InputLabel>
                    <Input id="measuring-unit-input" aria-describedby="measuring-unit-contact" />
                    <FormHelperText >Location here.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="identification-input">Identification </InputLabel>
                    <Input id="identification-input" aria-describedby="identification" />
                    <FormHelperText >Enter identification here.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="selling-price-input">identification_type </InputLabel>
                    <Input id="selling-price-input" aria-describedby="selling-price-contact" />
                    <FormHelperText >Enter the Selling Price here.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="discount-contact">Branch </InputLabel>
                    <Input id="discount-contact" aria-describedby="discount-contact" />
                    <FormHelperText >Enter Your fax here.</FormHelperText>
                </FormControl>
                <ButtonGroup aria-label="outlined primary button group" style={{justifyContent:"flex-end", padding: 10}}>
                    <Button variant="contained" startIcon={<SaveOutlinedIcon />} >Save</Button>
                    <Button variant="outlined" startIcon={<ViewListOutlinedIcon />}>Branch List</Button>
                </ButtonGroup>
        </SetupFormParent>
    );

}

export default withRouter(CustomerSetup);

