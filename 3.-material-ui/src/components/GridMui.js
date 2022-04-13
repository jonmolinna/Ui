import React from "react";
import { Grid } from "@mui/material";

const GridMui = () => {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={4} item sx={{ backgroundColor: "red" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        sequi, cum nihil, neque recusandae voluptatibus ad, repellendus
        voluptatem saepe consectetur aliquam pariatur atque assumenda mollitia
        ab. Corporis minima pariatur corrupti.
      </Grid>
      <Grid xs={12} sm={6} md={4} item sx={{ backgroundColor: "blue" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        sequi, cum nihil, neque recusandae voluptatibus ad, repellendus
        voluptatem saepe consectetur aliquam pariatur atque assumenda mollitia
        ab. Corporis minima pariatur corrupti.
      </Grid>
      <Grid xs={12} sm={6} md={4} item sx={{ backgroundColor: "green" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        sequi, cum nihil, neque recusandae voluptatibus ad, repellendus
        voluptatem saepe consectetur aliquam pariatur atque assumenda mollitia
        ab. Corporis minima pariatur corrupti.
      </Grid>
    </Grid>
  );
};

export default GridMui;
