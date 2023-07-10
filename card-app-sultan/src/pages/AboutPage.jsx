import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import NavItem from "../routes/components/NavItem";
import ROUTES from "../routes/routesModel";
import { useTheme } from "../providers/ThemeProvider";
import { useUser } from "../users/providers/UserProvider";

export default function AboutPage() {
  const { user } = useUser();
  const { isDark } = useTheme();
  return (
    <Container sx={{ color: isDark ? "white" : "black" }}>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={12}>
        <Grid
          item
          xs={12}
          md={8}
          alignItems="start"
          justifyContent="space-between"
        >
          <Typography sx={{ fontSize: "25px" }}>
            Welcome to Sultan Nassar Business Cards Website!
          </Typography>
          <Typography sx={{ fontSize: "17px" }}>
            <br />
            - We dedicated to helping professionals and businesses create
            impressive and impactful bussiness cards.
            <br />
            <br />
            - On this website you can find all the contact information of the
            businesses that are advertised here and their location.
            <br />
            <br /> Additionally if you want to advertise your business, please
            do not hesitate! you can do this here and its <strong>free!</strong>
            <br />
            just
            {<NavItem to={ROUTES.SIGNUP} label="sign up here" />}.
            <br />
            <br />
            <strong> Already a user?? </strong>
            <br />
            Great !! You can customize your own cards on
            {user?.isAdmin || user?.isBusiness ? (
              <NavItem to={ROUTES.MY_CARDS} label="My cards page" />
            ) : (
              " My Cards Page. "
            )}
            you can delete card, Edit card or add the business card which you
            liked to your
            {<NavItem to={ROUTES.FAV_CARDS} label="favorites cards" />}.
            <br />
            <br />
          </Typography>

          <Typography variant="h7" component="h3">
            We are looking forward to help you find the services you need and
            promote your own business! if you have any questions or need any
            help, please feel comfort to contact us.
            <br />
            Happy designing
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: { md: "flex", xs: "block" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/assets/images/cardphoto.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
