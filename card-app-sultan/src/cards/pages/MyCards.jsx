import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import { Container, Fab } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../providers/ThemeProvider";
import AddIcon from "@mui/icons-material/Add";
export default function MyCards() {
  const { user } = useUser();
  const {
    filteredCards,
    isloading,
    error,
    cards,
    handleGetMyCards,
    handleDeleteCard,
    handleLikeCard,
  } = useCards();

  const { isDark } = useTheme();
  useEffect(() => {
    handleGetMyCards();
  }, [handleGetMyCards]);
  const navigate = useNavigate();

  const handleDelete = async (cardId) => {
    await handleDeleteCard(cardId);
    handleGetMyCards();
  };
  const handleLike = async (id) => {
    await handleLikeCard(id);
    await handleGetMyCards(id);
  };

  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <div>
      <Container sx={{ color: isDark ? "white" : "primary" }}>
        <PageHeader
          title=" My Cards"
          subtitle="On this page you can find all your bussines cards from all categories"
        />
        {cards && (
          <Fab
            onClick={() => navigate(ROUTES.CREATE_CARD)}
            color="primary"
            aria-label="add"
            sx={{ position: "absolute", bottom: 160, right: 25 }}
          >
            <AddIcon />
          </Fab>
        )}
        <CardsFeedback
          cards={filteredCards}
          isloading={isloading}
          error={error}
          handleDelete={handleDelete}
          onLike={handleLike}
        />
      </Container>
    </div>
  );
}
