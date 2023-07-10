import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import PortraitIcon from "@mui/icons-material/Portrait";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <>
      <Paper
        sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="about"
            icon={<InfoIcon />}
            onClick={() => navigate(ROUTES.ABOUT)}
          />
          {user && (
            <BottomNavigationAction
              label="Favorite"
              icon={<FavoriteIcon onClick={() => navigate(ROUTES.FAV_CARDS)} />}
            />
          )}
          {user?.isBusiness && (
            <BottomNavigationAction
              label="My Cards"
              icon={<PortraitIcon />}
              onClick={() => navigate(ROUTES.MY_CARDS)}
            />
          )}
        </BottomNavigation>
      </Paper>
    </>
  );
}
