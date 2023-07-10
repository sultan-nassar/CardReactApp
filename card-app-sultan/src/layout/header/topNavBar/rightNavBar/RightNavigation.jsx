import { Box, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import MoreButton from "./MoreButton";
import SearchBar from "../rightNavBar/SearchBar";
import { makeFirstLetterCapital } from "../menu/utils/algoMethods";
import useUsers from "../../../../users/hooks/useUsers";

export default function RightNavigation() {
  const { handleGetUser } = useUsers();
  const { user } = useUser();

  useEffect(
    () => async () => {
      await handleGetUser();
    },
    [handleGetUser]
  );

  const { isDark, toggleDark } = useTheme();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />
        <IconButton sx={{ marginLeft: 1 }} onClick={toggleDark}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user ? (
          <Logged
            title={`Welcome ${makeFirstLetterCapital(user.firstName)} `}
          />
        ) : (
          <NotLogged />
        )}
      </Box>

      <MoreButton />
    </>
  );
}
