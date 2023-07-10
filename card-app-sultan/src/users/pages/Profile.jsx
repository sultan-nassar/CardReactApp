import React, { useEffect, useState } from "react";
import Map from "../../sandbox/map/Map";
import { Avatar, Card, Container, Divider, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import { useTheme } from "../../providers/ThemeProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import { makeFirstLetterCapital } from "../../forms/utils/algoMethods";

export default function Profile() {
  const { handleGetUser, error } = useUsers();
  const [userData, setUser] = useState();
  const { user } = useUser();
  useEffect(() => {
    const getUserData = async () => {
      setUser(await handleGetUser());
    };
    getUserData();
  }, [handleGetUser]);

  const { isDark } = useTheme();
  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <div>
      {userData ? (
        <Container
          sx={{
            color: isDark ? "white" : "primary",
          }}
        >
          <Container>
            <PageHeader
              title={`${makeFirstLetterCapital(userData.name.first)} Profile`}
              subtitle={`Here you can find all the details about ${userData.name.first} Profile`}
            />
          </Container>

          <Container
            sx={{
              pt: 5,
              pb: 7,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: isDark ? "white" : "primery",
            }}
          >
            {user && (
              <Card
                sx={{
                  width: "800px",
                  minHeight: "650",
                  boxShadow: 100,
                  borderRadius: 3,
                }}
              >
                <Container
                  sx={{
                    pt: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: isDark ? "white" : "primery",
                  }}
                >
                  <Avatar
                    sx={{ height: "200px", width: "200px", marginBottom: 1 }}
                    src="../../../assets/images/Avatar.png"
                    alt={userData.alt}
                  />
                </Container>
                <Divider variant="fullWidth" sx={{ margin: 2 }} />
                <Container
                  sx={{
                    pt: 2,
                    pb: 5,
                    display: "-ms-inline-flexbox",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: isDark ? "white" : "primery",
                  }}
                >
                  <Typography>
                    <strong>First Name:</strong> <br />
                    {userData.name.first}
                  </Typography>
                  <br />
                  <Typography>
                    <strong>last Name:</strong> <br />
                    {userData.name.last}
                  </Typography>
                  <br />

                  <Typography>
                    <strong>Phone Number:</strong> <br />
                    {userData.phone}
                  </Typography>
                  <br />
                  <Typography>
                    <strong>Email:</strong> <br />
                    {userData.email}
                  </Typography>
                  <br />
                </Container>
                <Container
                  sx={{
                    width: "80%",
                    height: "580px", // Adjust the value as needed
                    pb: 5,
                  }}
                >
                  <Map
                    center={[51.505, -0.09]}
                    zoom={13}
                    address={
                      userData &&
                      `${userData.address.city} ${userData.address.street} ${userData.address.houseNumber}`
                    }
                  />
                </Container>
              </Card>
            )}
          </Container>
        </Container>
      ) : (
        error?.message
      )}
    </div>
  );
}
