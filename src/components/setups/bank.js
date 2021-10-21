import React, {useState} from "react";
import { withRouter } from "react-router";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SetupFormParent from "./setupformparent";
import CustomParentModal from "./modal_parent";
import TableList from "./TableList";

// View: BankSetup
function BankSetup (props) {
    const [open, setOpen] = useState(false);

    const columns = [
        'Bank name',
        'Branch name'
    ];

    const handleBankList = () => {
        setOpen(true);
    }

    return (
        <SetupFormParent {...props}>
            <FormControl >
                <InputLabel htmlFor="my-input">Bank Name</InputLabel>
                <Input id="bank-name" aria-describedby="bank-name" sx={{width: 350}} />
                <FormHelperText >Enter Your Bank Name here.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch Name</InputLabel>
                <Input id="branch-name" aria-describedby="branch-name" sx={{width: 350}}/>
                <FormHelperText >Enter Your Branch Name here.</FormHelperText>
            </FormControl>

            <ButtonGroup aria-label="outlined primary button group" style={{justifyContent:"flex-end", padding: 10}}>
                <Button variant="contained" startIcon={<SaveOutlinedIcon />} >Save</Button>
                <Button variant="outlined" startIcon={<ViewListOutlinedIcon />}
                onClick={handleBankList}
                >Bank List</Button>
            </ButtonGroup>
            <CustomParentModal open={open} setOpen={setOpen} title={"Bank List"}>
                <TableList columns={columns}></TableList>
            </CustomParentModal>
        </SetupFormParent>
    
    );

}

export default withRouter(BankSetup);

