import { MenuItem, MenuList, Box, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function PreviewItem() {
  const categoryItem = [
    {
      id: 0,
      label: "Baju",
      image: "https://example.com/baju.jpg",
      harga: "10.000",
      link: "/baju",
    },
    {
      id: 1,
      label: "Celana",
      image: "https://example.com/celana.jpg",
      harga: "20.000",
      link: "/celana",
    },
    {
      id: 2,
      label: "Make Up",
      image: "https://example.com/makeup.jpg",
      harga: "5.000",
      link: "/makeup",
    },
    {
      id: 3,
      label: "Hobi",
      image: "https://example.com/hobi.jpg",
      harga: "20.000",
      link: "/hobi",
    },
    {
      id: 4,
      label: "Perkakas",
      image: "https://example.com/perkakas.jpg",
      harga: "50.000",
      link: "/perkakas",
    },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <MenuList
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {categoryItem.map((item) => (
          <MenuItem
            key={item.id}
            component={Link}
            to={item.link}
            sx={{
              backgroundColor: "#1a1a1a",
              borderRadius: "16px",
              width: 120,
              height: 140,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#333",
                transform: "scale(1.05)",
              },
            }}
          >
            <Avatar
              src={item.image}
              alt={item.label}
              sx={{ width: 56, height: 56, mb: 1 }}
            />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {item.label}
            </Typography>
            <Typography variant="caption">{item.harga}</Typography>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
}
