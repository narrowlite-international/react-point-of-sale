import React, {useState} from "react";
import { withRouter } from "react-router";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SetupFormParent from "./setupformparent";
import CustomParentModal from "./modal_parent";
import Grid from "@mui/material/Grid";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {saveSetup} from '../../api/api_functions';
import TableList from './TableList';

// View: CustomerSetup
function CustomerSetup ( props ) {
    const [open, setOpen] = useState(false);
    const columns = [
        'Customer name',
        'Contact',
        'Location',
        'Identification',
        'Identification type',
        'Branch'
    ]
    const handleCustomerList = () => {
        setOpen(true);
    }

    const handleSaveCustomer = () => {
        //prepare POST body
        let body = {
            '':''
        }

        saveSetup(body);
    }

    return (
        <SetupFormParent {...props}>
            <FormControl >
                <InputLabel htmlFor="customer_name-input">Customer Name</InputLabel>
                <Input id="customer_name-input" aria-describedby="customer-name" sx={{width: 350}}/>
                <FormHelperText >Enter Your Customer Name here.</FormHelperText>
                </FormControl>
                
                <Grid container spacing={3}> 
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="contact-input">Contact</InputLabel>
                            <Input id="contact-input" aria-describedby="contact" />
                            <FormHelperText >Contact here.</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="measuring-unit-input">Location</InputLabel>
                            <Input id="measuring-unit-input" aria-describedby="measuring-unit-contact" />
                            <FormHelperText >Location here.</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="identification-input">Identification </InputLabel>
                            <Input id="identification-input" aria-describedby="identification" />
                            <FormHelperText >Enter identification here.</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                        <Autocomplete
                            options={['Voters\' ID', 'Passport', 'NHIS', 'Ghana Card', 'Drivers\' License']}
                            id="blur-on-select"
                            blurOnSelect
                            renderInput={(params) => (
                            <TextField {...params} label="Identification Type" variant="standard" />
                            )}
                        />
                        
                            <FormHelperText >Identification Type here.</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="Branch">Branch </InputLabel>
                            <Input id="Branch" aria-describedby="branch" />
                            <FormHelperText >Enter Your Branch here.</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>

                <ButtonGroup aria-label="outlined primary button group" style={{justifyContent:"flex-end", padding: 10}}>
                    <Button variant="contained" startIcon={<SaveOutlinedIcon />} 
                        onClick={handleSaveCustomer}
                    >Save</Button>
                    <Button variant="outlined" startIcon={<ViewListOutlinedIcon />}
                        onClick={handleCustomerList}
                        >Customer List</Button>
                </ButtonGroup>
                <CustomParentModal open={open} setOpen={setOpen} title={"Customer List"}>
                <TableList columns={columns}></TableList>
                </CustomParentModal>
        </SetupFormParent>
    );

}

export default withRouter(CustomerSetup);

