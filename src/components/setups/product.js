import React from "react";
import { withRouter } from "react-router";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import TextField from '@mui/material/TextField';
import SetupFormParent from "./setupformparent";


// View: ProductSetup
function ProductSetup (props) {

    return (
        <SetupFormParent {...props}>
            <FormControl >
                <InputLabel htmlFor="product_name-input">Product Name</InputLabel>
                <Input id="product_name-input" aria-describedby="product_name-name" />
                <FormHelperText >Enter Your Product Name here.</FormHelperText>
            </FormControl>
            <FormControl>
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                placeholder="Description Goes here ..."
            />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="barcode-input">Barcode</InputLabel>
                <Input id="barcode-input" aria-describedby="barcode-contact" />
                <FormHelperText >Barcode here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="measuring-unit-input">Measuring Unit</InputLabel>
                <Input id="measuring-unit-input" aria-describedby="measuring-unit-contact" />
                <FormHelperText >Enter the measuring unit here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="cost-price-input">Cost Price </InputLabel>
                <Input id="cost-price-input" aria-describedby="cost-price" />
                <FormHelperText >Enter Cost Price here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="selling-price-input">Selling Price </InputLabel>
                <Input id="selling-price-input" aria-describedby="selling-price-contact" />
                <FormHelperText >Enter the Selling Price here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="discount-contact">Discount </InputLabel>
                <Input id="discount-contact" aria-describedby="discount-contact" />
                <FormHelperText >Enter Your fax here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="reorder-level-input">Expected Reorder Level </InputLabel>
                <Input id="reorder-level-input" aria-describedby="expected-reorder-level" />
                <FormHelperText >Enter Your Expected Reorder Level here.</FormHelperText>
            </FormControl>
            <ButtonGroup aria-label="outlined primary button group" style={{justifyContent:"flex-end", padding: 10}}>
                <Button variant="contained" startIcon={<SaveOutlinedIcon />} >Save</Button>
                <Button variant="outlined" startIcon={<ViewListOutlinedIcon />}>Branch List</Button>
            </ButtonGroup>
        </SetupFormParent>
    );
}

export default withRouter(ProductSetup);

