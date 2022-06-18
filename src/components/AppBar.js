import {
  Instagram,
  AccountCircle,
  Home,
  AddCircleOutline,
  FavoriteOutlined,
  Search,
} from "@mui/icons-material";
import {
  AppBar as NavBar,
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";

const AppBar = () => {
  return (
    <NavBar sx={{ background: "#FFFFFF" }}>
      <Container maxWidth={"md"}>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box flex={1}>
              <Instagram fontSize="large" />
            </Box>
            <Box flex={4}>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
                sx={{
                  width: "70%",
                  marginLeft: "50px",
                }}
              />
            </Box>
            <Box
              flex={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Home fontSize="large" />
              <AddCircleOutline fontSize="large" />
              <FavoriteOutlined fontSize="large" />
              <AccountCircle fontSize="large" />
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </NavBar>
  );
};

export default AppBar;
