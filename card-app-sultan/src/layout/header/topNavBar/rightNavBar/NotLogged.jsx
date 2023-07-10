import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

export default function NotLogged() {
  return (
    <Box>
      <NavItem to={ROUTES.SIGNUP} label="sign up" />
      <NavItem to={ROUTES.LOGIN} label="Login" />
    </Box>
  );
}
