import { Box, Divider } from "@mui/material";
import React from "react";
import Category from "./Category";
import PreviewItem from "./PreviewItem";
import DiscountSection from "./DiscountSection";

function Landing() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Category />
      <DiscountSection />
      <PreviewItem />
    </Box>
  );
}

export default Landing;
