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
// View: BranchSetup
function BranchSetup (props) {
    const [open, setOpen] = useState(false);
    const handleBranchList = () => {
        setOpen(true);
    }

    return (
        <SetupFormParent {...props}>
            <FormControl >
                <InputLabel htmlFor="my-input">Branch Name</InputLabel>
                <Input id="branch-input" aria-describedby="branch-name" />
                <FormHelperText >Enter Your Branch Name here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch Name</InputLabel>
                <Input id="bank-input" aria-describedby="bank-name" />
                <FormHelperText >Enter Your location here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">First Contact</InputLabel>
                <Input id="firstcontact-input" aria-describedby="first-contact" />
                <FormHelperText >Enter Your first contact here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Second Contact</InputLabel>
                <Input id="secondcontact-input" aria-describedby="second-contact" />
                <FormHelperText >Enter Your second contact here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email </InputLabel>
                <Input id="email-input" aria-describedby="email" />
                <FormHelperText >Enter Your Email here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Website </InputLabel>
                <Input id="website-input" aria-describedby="second-contact" />
                <FormHelperText >Enter Your website here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Fax </InputLabel>
                <Input id="fax-input" aria-describedby="fax-contact" />
                <FormHelperText >Enter Your fax here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Manager </InputLabel>
                <Input id="website-input" aria-describedby="Manager" />
                <FormHelperText >Enter Your Manager here.</FormHelperText>
            </FormControl>
            <ButtonGroup aria-label="outlined primary button group" style={{justifyContent:"flex-end", padding: 10}}>
                <Button variant="contained" startIcon={<SaveOutlinedIcon />} >Save</Button>
                <Button variant="outlined" startIcon={<ViewListOutlinedIcon />}
                    onClick={handleBranchList}
                >Branch List</Button>
            </ButtonGroup>
            <CustomParentModal open={open} setOpen={setOpen}/>
        </SetupFormParent>
    );

}

export default withRouter(BranchSetup);

