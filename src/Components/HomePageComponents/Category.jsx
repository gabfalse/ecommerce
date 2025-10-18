import { MenuItem, MenuList, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Category() {
  const categoryItem = [
    { id: 0, label: "Baju", link: "/baju" },
    { id: 1, label: "Celana", link: "/celana" },
    { id: 2, label: "Make Up", link: "/makeup" },
    { id: 3, label: "Hobi", link: "/hobi" },
    { id: 4, label: "Perkakas", link: "/perkakas" },
  ];

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Discover
      </Typography>

      <MenuList
        sx={{
          display: "flex",
          flexWrap: "wrap", // agar melipat saat layar kecil
          justifyContent: "center",
          gap: { xs: 2, sm: 4, md: 6 }, // responsive spacing
        }}
      >
        {categoryItem.map((item) => (
          <MenuItem
            key={item.id}
            component={Link}
            to={item.link}
            sx={{
              backgroundColor: "darkblue",
              borderRadius: "50%",
              height: { xs: 70, sm: 90, md: 100 },
              width: { xs: 70, sm: 90, md: 100 },
              justifyContent: "center",
              color: "white",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              "&:hover": {
                backgroundColor: "navy",
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
}
