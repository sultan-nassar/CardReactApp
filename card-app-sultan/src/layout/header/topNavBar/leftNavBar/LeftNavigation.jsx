import { Box } from "@mui/material";
import React from "react";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

export default function LeftNavigation() {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "-ms-inline-grid", md: "inline-flex" } }}>
        <NavItem to={ROUTES.ABOUT} label="about" />
        {user && <NavItem to={ROUTES.FAV_CARDS} label="FavCards" />}

        {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="MyCards" />}
        {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
      </Box>
    </Box>
  );
}
