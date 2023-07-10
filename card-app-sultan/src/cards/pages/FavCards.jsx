import { Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../providers/ThemeProvider";

export default function FavCards() {
  const {
    filteredCards,
    isloading,
    error,
    handleGetFavCards,
    handleDeleteCard,
    handleLikeCard,
  } = useCards();

  const { isDark } = useTheme();
  const { user } = useUser();
  useEffect(() => {
    handleGetFavCards();
  }, [handleGetFavCards]);

  const handleDelete = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      handleGetFavCards();
    },
    [handleDeleteCard, handleGetFavCards]
  );

  const handleLike = useCallback(
    async (id) => {
      await handleLikeCard(id);
      await handleGetFavCards();
    },
    [handleGetFavCards, handleLikeCard]
  );
  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }

  return (
    <div>
      <Container sx={{ color: isDark ? "white" : "primary" }}>
        <PageHeader
          title="Favorite Cards Page"
          subtitle="On this page you can find all your favorite bussines cards"
        />
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
