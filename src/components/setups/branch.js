import React, {useState} from "react";
import { withRouter } from "react-router";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "material-ui/Paper";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SetupFormParent from "./setupformparent";
import CustomParentModal from "./modal_parent";
import Grid from '@mui/material/Grid';
import TableList from "./TableList";
import {saveSetup} from '../../api/api_functions';

// View: BranchSetup
function BranchSetup (props) {
    const [open, setOpen] = useState(false);
    const columns = [
        'Branch name',
        'Branch location',
        'First contact',
        'Second contact',
        'Email',
        'Website',
        'Fax',
        'Manager'
    ];
    const handleBranchList = () => {
        setOpen(true);
    }

    const handleBranchSave = () => {
        //prepare POST body
        let body = {
            '':''
        }

        saveSetup(body);
    }

    return (
        <SetupFormParent {...props}>
            <Grid container spacing={2}>
                <Grid item >
                    <FormControl >
                        <InputLabel htmlFor="my-input">Branch Name</InputLabel>
                        <Input id="branch-input" aria-describedby="branch-name" fullWidth={true} sx={{width: 370}}/>
                        <FormHelperText >Enter Your Branch Name here.</FormHelperText>
                    </FormControl>
                    
                </Grid>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="my-input">Branch Location</InputLabel>
                        <Input id="bank-input" aria-describedby="branch-location" sx={{width: 370}}/>
                        <FormHelperText >Enter Your location here.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            
            <Grid container spacing={3}>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="my-input">First Contact</InputLabel>
                        <Input id="firstcontact-input" aria-describedby="first-contact" sx={{width: 200}}/>
                        <FormHelperText >Enter Your first contact here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="my-input">Second Contact</InputLabel>
                        <Input id="secondcontact-input" aria-describedby="second-contact" sx={{width: 200}}/>
                        <FormHelperText >Enter Your second contact here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email </InputLabel>
                        <Input type="email" id="email-input" aria-describedby="email" sx={{width: 300}}/>
                        <FormHelperText >Enter Your Email here.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            
            
            <Grid container spacing={3}>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="my-input">Website </InputLabel>
                        <Input id="website-input" aria-describedby="website" sx={{width: 350}}/>
                        <FormHelperText >Enter Your website here.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl>
                        <InputLabel htmlFor="my-input">Fax </InputLabel>
                        <Input id="fax-input" aria-describedby="fax-contact" sx={{width: 350}}/>
                        <FormHelperText >Enter Your fax here.</FormHelperText>
                    </FormControl>    
                </Grid>
            </Grid>
            
            <FormControl>
                <InputLabel htmlFor="my-input">Manager </InputLabel>
                <Input id="website-input" aria-describedby="Manager" sx={{width: 350}}/>
                <FormHelperText >Enter Your Manager here.</FormHelperText>
            </FormControl>
            
            <ButtonGroup aria-label="outlined primary button group" style={{justifyContent:"flex-end", padding: 10}}>
                <Button variant="contained" startIcon={<SaveOutlinedIcon />}
                    onClick={handleBranchSave}
                >Save</Button>
                <Button variant="outlined" startIcon={<ViewListOutlinedIcon />}
                    onClick={handleBranchList}
                >Branch List</Button>
            </ButtonGroup>
            <CustomParentModal open={open} setOpen={setOpen} title={"Branch List"}>
                <TableList columns={columns}></TableList>
            </CustomParentModal>
        </SetupFormParent>
    );

}

export default withRouter(BranchSetup);

