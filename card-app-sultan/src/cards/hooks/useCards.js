import { useCallback, useEffect, useMemo, useState } from "react";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiServices";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import { useUser } from "../../users/providers/UserProvider";
import normalizeCard from "../helpers/normalization/normalization";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function useCards() {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filteredCards, setFilter] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = useCallback(async () => {
    try {
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All the cards are here");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [snack]);
  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
      snack("success", "All your cards are here");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [snack]);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  //handleGetCard
  const handleGetCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleUpdateCard
  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      try {
        setLoading(true);
        const card = await editCard(cardId, cardFromClient);
        requestStatus(false, null, null, card);
        setTimeout(() => navigate(ROUTES.CARDS), 1800);
        snack("success", "The business card has been successfully updated");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [navigate, snack]
  );

  //handleLikeCard
  const handleLikeCard = useCallback(
    async (cardId) => {
      try {
        await changeLikeStatus(cardId);
        snack("success", "The business card has been Liked");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  //handleGetFavCards
  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
      snack("success", "All your Favorite cards are here");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [user, snack]);

  //handleCreateCard
  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeCard(cardFromClient);
        normalizedCard.user_id = user.id;
        const card = await createCard(normalizedCard);
        requestStatus(false, null, null, card);
        snack("success", "A new business card has been created");
        setTimeout(() => navigate(ROUTES.CARDS), 1800);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [navigate, snack]
  );

  const value = useMemo(() => {
    return { isLoading, cards, card, error, filteredCards };
  }, [isLoading, cards, card, error, filteredCards]);

  return {
    value,
    filteredCards,
    cards,
    isLoading,
    card,
    error,
    handleGetCards,
    handleDeleteCard,
    handleGetMyCards,
    handleGetCard,
    handleUpdateCard,
    handleLikeCard,
    handleGetFavCards,
    handleCreateCard,
    setCards,
  };
}
