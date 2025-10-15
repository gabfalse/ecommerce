import { Box, Button, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import Landing from "../Components/HomePageComponents/Landing";
import NavigationButton from "../Components/NavigationButton";

function HomePage() {
  return (
    <Box sx={{ mt: 10 }}>
      <Navbar />
      <Landing />
      <NavigationButton />
    </Box>
  );
}

export default HomePage;
