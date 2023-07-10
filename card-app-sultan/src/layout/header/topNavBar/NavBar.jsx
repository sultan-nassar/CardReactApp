import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import LeftNavigation from "./leftNavBar/LeftNavigation";
import RightNavigation from "./rightNavBar/RightNavigation";
import { MenuProvider } from "./menu/MenuProvider";
import SearchBar from "./rightNavBar/SearchBar";

export default function NavBar() {
  return (
    <MenuProvider>
      <AppBar position="sticky" color="primary" elevation={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavigation />
          <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <SearchBar />
          </Box>
          <RightNavigation />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
