import {
  AppBar,
  Box,
  IconButton,
  TextField,
  Toolbar,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Search, ShoppingCart, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 1200,
        py: 1,
      }}
    >
      {/* 🔹 Baris Atas */}
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4 },
          mb: 1,
        }}
      >
        {/* ☰ Menu */}
        <IconButton
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
            width: 40,
            height: 40,
          }}
        >
          <Menu size={20} />
        </IconButton>

        {/* 🧠 Ucapan Selamat Datang */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Selamat Datang, Nama👋
        </Typography>

        {/* 🛒 Keranjang */}
        <IconButton
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
            width: 40,
            height: 40,
          }}
        >
          <ShoppingCart size={20} />
        </IconButton>
      </Toolbar>

      {/* 🔍 Baris Bawah (Search Field) */}
      <Box
        sx={{
          px: { xs: 2, sm: 4 },
          pb: 1,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Cari barang..."
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
              backgroundColor: "background.default",
              "& fieldset": { border: "none" },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} style={{ opacity: 0.8 }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </AppBar>
  );
}
