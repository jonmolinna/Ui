import React from "react";
import { Grid, Typography } from "@mui/material";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PetsIcon from "@mui/icons-material/Pets";
import { blueGrey } from "@mui/material/colors";

const DesktopCategories = () => {
  return (
    <Grid
      sx={{ border: "1px solid #e0e0e0", mt: 8, mb: 4 }}
      justify="space-between"
      alignItems="center"
      container
      spacing={2}
    >
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ChildFriendlyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Babysitter</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LocalMoviesIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Movies</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ChildFriendlyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Babysitter</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SportsRugbyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Sports</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CheckroomIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Clothings</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <MusicNoteIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Music</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PetsIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Pets</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ChildFriendlyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Kitchen</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ChildFriendlyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Travel</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ChildFriendlyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Electrical</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ChildFriendlyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
          color="secondary"
        />
        <Typography>Power</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ChildFriendlyIcon
          sx={{ width: "40px", height: "40px", color: blueGrey[500] }}
        />
        <Typography>Babysitter</Typography>
      </Grid>
    </Grid>
  );
};

export default DesktopCategories;
