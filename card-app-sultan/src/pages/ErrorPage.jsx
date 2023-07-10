import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ROUTES from "../routes/routesModel";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <PageHeader title="Error 404" subtitle="Page not found" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial">
            Oops... The requested URL was not found on this server
          </Typography>
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              navigate(ROUTES.ROOT);
            }}
          >
            Click here to return to the home Page...
          </Button>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <img
            width="100%"
            src="/assets/images/broken-robot-error.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
