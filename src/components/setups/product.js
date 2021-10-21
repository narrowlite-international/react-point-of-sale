import React, {useState} from "react";
import { withRouter } from "react-router";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import TextField from '@mui/material/TextField';
import SetupFormParent from "./setupformparent";
import CustomParentModal from "./modal_parent";
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import TableList from './TableList';


// View: ProductSetup
function ProductSetup (props) {
    const [open, setOpen] = useState(false);
    const columns = [
        'Product name',
        'Description',
        'Barcode',
        'Measuring Unit',
        'Cost Price',
        'Selling Price',
        'Discount',
        'Expected Reorder Level'
    ];

    const handleProductList = () => {
        setOpen(true);
    }
    
    return (
        <SetupFormParent {...props}>
            <FormControl >
                <InputLabel htmlFor="product_name-input">Product Name</InputLabel>
                <Input id="product_name-input" aria-describedby="product_name-name" sx={{width: 350}}/>
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
            <Grid container spacing={3}>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="barcode-input">Barcode</InputLabel>
                        <Input id="barcode-input" aria-describedby="barcode-contact" />
                        <FormHelperText >Barcode here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl>
                        <Autocomplete
                            options={['Boxes', 'Bags', 'Pieces', 'Containers', 'Bottles', 'Blisters', 'Carton']}
                            id="blur-on-select"
                            blurOnSelect
                            renderInput={(params) => (
                            <TextField {...params} label="Measuring Unit" variant="standard" />
                            )}
                        />
                        
                        <FormHelperText >Enter the measuring unit here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="cost-price-input">Cost Price </InputLabel>
                        <Input id="cost-price-input" aria-describedby="cost-price" />
                        <FormHelperText >Enter Cost Price here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="selling-price-input">Selling Price </InputLabel>
                        <Input id="selling-price-input" aria-describedby="selling-price-contact" />
                        <FormHelperText >Enter the Selling Price here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="discount-contact">Discount </InputLabel>
                        <Input id="discount-contact" aria-describedby="discount-contact" />
                        <FormHelperText >Enter Your Discount here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="reorder-level-input">Expected Reorder Level </InputLabel>
                        <Input type="number" id="reorder-level-input" aria-describedby="expected-reorder-level" />
                        <FormHelperText >Enter Your Expected Reorder Level here.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            
            <ButtonGroup aria-label="outlined primary button group" style={{justifyContent:"flex-end", padding: 10}}>
                <Button variant="contained" startIcon={<SaveOutlinedIcon />} >Save</Button>
                <Button variant="outlined" startIcon={<ViewListOutlinedIcon />}
                    onClick={handleProductList}
                >Product List</Button>
            </ButtonGroup>
            <CustomParentModal open={open} setOpen={setOpen} title={"Product List"} >
                <TableList columns={columns}></TableList>
            </CustomParentModal>
        </SetupFormParent>
    );
}

export default withRouter(ProductSetup);

