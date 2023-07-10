import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useTheme } from "../../providers/ThemeProvider";
export default function CardsPage() {
  const {
    filteredCards,
    isloading,
    error,
    handleGetCards,
    handleDeleteCard,
    handleLikeCard,
  } = useCards();

  const { isDark } = useTheme();

  useEffect(() => {
    handleGetCards();
  }, [handleGetCards]);

  const handleDelete = async (cardId) => {
    await handleDeleteCard(cardId);
    handleGetCards();
  };

  const handleLike = async (id) => {
    await handleLikeCard(id);
    await handleGetCards();
  };

  return (
    <div>
      <Container sx={{ color: isDark ? "white" : "primary" }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
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
