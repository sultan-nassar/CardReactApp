import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../routes/components/NavItem";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import ROUTES from "../routes/routesModel";

export default function Sandbox() {
  const { user } = useUser();
  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <div>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          color: "black",
        }}
      >
        <Toolbar sx={{ display: { xs: "list-item", md: "list-item" } }}>
          <NavItem to="first" label="firstComp" sx={{ color: "black" }} />
          <NavItem to="second" label="secondComp" sx={{ color: "black" }} />
          <NavItem to="Life" label="LifeCycle" sx={{ color: "black" }} />
          <NavItem to="Counter" label="Counter" sx={{ color: "black" }} />
          <NavItem to="Country" label="Country" sx={{ color: "black" }} />
          <NavItem to="Countries" label="Countries" sx={{ color: "black" }} />
          <NavItem
            to="Memoization"
            label="Memoization"
            sx={{ color: "black" }}
          />
          <NavItem to="Mycounter" label="Mycounter" sx={{ color: "black" }} />
          <NavItem
            to="MyformTargil"
            label="MyformTargil"
            sx={{ color: "black" }}
          />
          <NavItem to="grand" label="Context" sx={{ color: "black" }} />
          <NavItem to="MyForm" label="MyForm" sx={{ color: "black" }} />
          <NavItem
            to="MyFormCustom"
            label="MyFormWithCustomComponents"
            sx={{ color: "black" }}
          />
          <NavItem to="TestForm" label="TestForm" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
