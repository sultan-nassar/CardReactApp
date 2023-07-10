import { Avatar, Card, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu/utils/algoMethods";
import { useTheme } from "../../providers/ThemeProvider";
import Map from "../../sandbox/map/Map";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { isDark } = useTheme();
  const { handleGetCard, card } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, [handleGetCard, id]);

  return (
    <div>
      <Container
        sx={{
          color: isDark ? "white" : "primary",
        }}
      >
        {card && (
          <Container>
            <PageHeader
              title={`${makeFirstLetterCapital(card.title)} Card Details`}
              subtitle={`Here you can find all the details about the ${card.title} card`}
            />
          </Container>
        )}
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
          {card && (
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
                  src={"/" + card.image.url}
                  alt={card.image.alt}
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
                <Typography sx={{ fontSize: 20 }}>
                  <strong>Title:</strong> <br />
                  {card.title}
                </Typography>
                <br />
                <Typography>
                  <strong>Subtitle:</strong>
                  <br />
                  {card.subtitle}
                </Typography>
                <br />
                <Typography>
                  <strong>Description:</strong> <br />
                  {card.description}
                </Typography>
                <br />
                <Typography>
                  <strong>Phone Number:</strong> <br />
                  {card.phone}
                </Typography>
                <br />
                <Typography>
                  <strong>Email:</strong> <br />
                  {card.email}
                </Typography>
                <br />
                <Typography>
                  <strong>Website:</strong> <br />
                  {card.web}
                </Typography>
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
                    card &&
                    `${card.address.city} ${card.address.street} ${card.address.houseNumber}`
                  }
                />
              </Container>
            </Card>
          )}
        </Container>
      </Container>
    </div>
  );
}
