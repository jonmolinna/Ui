import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const DrawerComponent = ({ openDrawer, setopenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <ListItem divider button onClick={() => setopenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Men</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setopenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Women</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setopenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Categories</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
