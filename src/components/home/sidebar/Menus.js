import React, { Component, Fragment, useState } from "react";
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';

import { withRouter } from "react-router"; 
import ViewModule from "material-ui-icons/ViewModule";
import GroupAdd from "material-ui-icons/GroupAdd";
import SupervisorAccount from "material-ui-icons/SupervisorAccount";
import NoteAdd from "material-ui-icons/NoteAdd";
import LocalGroceryStore from "material-ui-icons/LocalGroceryStore";
import Assessment from "material-ui-icons/Assessment";
import LocalAtm from "material-ui-icons/LocalAtm";
import More from "material-ui-icons/More";
import SidebarMenu from "../../controls/SidebarMenu";

const Menus = (props) => {
  
  const [openSetupMenu, setOpenSetupMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const isSelected = path =>
    props.history.location.pathname === `/${path}` ||
    props.history.location.pathname.includes(`/${path}/`);

  const onMenuClick = route => {
    props.history.push(route);
  };

  const toggleSetupsMenu = () => {
    setOpenSetupMenu(!openSetupMenu);
  }

  const handleClick = (e, index, route="") => {
    setSelectedIndex(index);
    if (index === 0) toggleSetupsMenu();
    if (route === "") return;
    
    onMenuClick(route);
    
  }

    return (
      <Fragment>
           <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Menu
              </ListSubheader>
            }
          >
            <ListItemButton onClick={(e) => handleClick(e, 0)} selected={selectedIndex === 0} >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Setups" />
              {openSetupMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSetupMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={(e) => handleClick(e, 1, '/setup/branch-setup')} selected={selectedIndex === 1} >
                  <ListItemIcon>
                    <StoreMallDirectoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Branch" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={(e) => handleClick(e, 2, '/setup/bank-setup')} selected={selectedIndex === 2}>
                  <ListItemIcon>
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bank" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={(e) => handleClick(e, 3, '/setup/product-setup')} selected={selectedIndex === 3}>
                  <ListItemIcon>
                    <InventoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Product" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={(e) => handleClick(e, 4, '/setup/customer-setup')} selected={selectedIndex === 4}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customer" />
                </ListItemButton>
              </List>
            </Collapse>
          
          </List>
      </Fragment>
    );
}

export default withRouter(Menus);
