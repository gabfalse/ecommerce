import { Box, Typography } from "@mui/material";

export default function DiscountSection() {
  return (
    <Box justifyItems={"center"}>
      <Typography
        sx={{
          justifyContent: "center",
          backgroundColor: "#150060ff",
          color: "white",
          width: "50vh",
          height: "30vh",
          alignContent: "center",
          borderRadius: "10%",
          m: 5,
          border: "5px solid",
          borderColor: "#007885ff",
        }}
      >
        Discount 50%
      </Typography>
    </Box>
  );
}
