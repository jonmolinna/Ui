import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const ProductContainer = () => {
  return (
    <Box sx={{ minHeight: "60vh", mr: 2, ml: 2, mt: -23 }}>
      {/* Featured Product */}
      <Grid sx={{ mb: 4 }} container spacing={2}>
        <Grid
          md={6}
          item
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{ width: { xs: "100%", lg: "40%" } }}
            component="img"
            src="img/img-2.png"
          />
          <Box sx={{ paddingLeft: "10px", mt: { xs: 2, lg: 21 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Winter suits 2021
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              veritatis officia itaque cum porro ipsam!
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $520.00
            </Typography>
            <Button variant="outlined" size="medium">
              Add To Cart
            </Button>
          </Box>
        </Grid>
        <Grid
          md={6}
          item
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{ width: { xs: "100%", lg: "40%" } }}
            component="img"
            src="img/img-2.png"
          />
          <Box sx={{ paddingLeft: "10px", mt: { xs: 2, lg: 21 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Winter suits 2021
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              veritatis officia itaque cum porro ipsam!
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $520.00
            </Typography>
            <Button variant="outlined" size="medium">
              Add To Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Product List */}
    </Box>
  );
};

export default ProductContainer;
