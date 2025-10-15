import { MenuItem, MenuList, Box } from "@mui/material";

import { Link } from "react-router-dom";

export default function Category() {
  const categoryItem = [
    {
      id: 0,
      label: "Baju",
      link: "/baju",
    },
    {
      id: 1,
      label: "Celana",
      link: "/celana",
    },
    {
      id: 2,
      label: "Make Up",
      link: "/makeup",
    },
    {
      id: 3,
      label: "Hobi",
      link: "/hobi",
    },
    {
      id: 4,
      label: "Perakakas",
      link: "/perkakas",
    },
  ];
  return (
    <Box>
      <MenuList
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {categoryItem.map((item) => (
          <MenuItem
            sx={{
              backgroundColor: "black",
              borderRadius: "20%",
              height: 100,
              width: 100,
              justifyContent: "center",
              color: "white",
            }}
            component={Link}
            to={item.link}
            key={item.id}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
}
