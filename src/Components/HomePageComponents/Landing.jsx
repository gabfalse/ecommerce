import { Box, Divider } from "@mui/material";
import React from "react";
import Category from "./Category";
import PreviewItem from "./PreviewItem";

function Landing() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Category />
      <Divider />
      <PreviewItem />
    </Box>
  );
}

export default Landing;
