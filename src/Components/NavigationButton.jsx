import { Link, useNavigate } from "react-router-dom";
import { Box, MenuItem, MenuList } from "@mui/material";

export default function NavigationButton() {
  const menuItem = [
    {
      id: 0,
      label: "home",
      url: "/",
    },
    {
      id: 1,
      label: "Kerajang",
      url: "/keranjang",
    },
    {
      id: 2,
      label: "Notifikasi",
      url: "/notif",
    },
    {
      id: 3,
      label: "Saya",
      url: "/saya",
    },
  ];

  return (
    <Box
      sx={{
        bottom: 0,
        position: "fixed",
        left: 0,
        right: 0,
        background: "background.paper",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <MenuList
        sx={{
          display: "space-between",

          justifyContent: "center",
        }}
      >
        {menuItem.map((item) => (
          <MenuItem component={Link} to={item.url} key={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
}
