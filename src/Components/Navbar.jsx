import { AppBar, Box, MenuItem, MenuList, TextField } from "@mui/material";

export default function Navbar() {
  return (
    <Box height={"10vh"}>
      <AppBar>
        <MenuList sx={{ display: "flex" }}>
          <MenuItem sx={{ width: "90%" }}>
            <TextField label={"Cari ..."} fullWidth /> 🔍
          </MenuItem>
          <MenuItem> 🗨️</MenuItem>
        </MenuList>
      </AppBar>
    </Box>
  );
}
