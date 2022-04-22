import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup total={24}>
          <Avatar
            alt="Remy Sharp"
            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643904771/l0j3fk9wpulqpqh7ayos.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643903733/rlou1oguwhxhawlmoabm.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643899251/k0rveh9hf8ojhxlln6f4.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1646940624/e-commerce/banner-1_rs92pf.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643904771/l0j3fk9wpulqpqh7ayos.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643903733/rlou1oguwhxhawlmoabm.png"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643899251/k0rveh9hf8ojhxlln6f4.png"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643899251/k0rveh9hf8ojhxlln6f4.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643904771/l0j3fk9wpulqpqh7ayos.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643899251/k0rveh9hf8ojhxlln6f4.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
