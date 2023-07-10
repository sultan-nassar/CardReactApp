import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography } from "@mui/material";
import Cards from "./Cards";
import { arrayOf, bool, func, object } from "prop-types";

export default function CardsFeedback({
  isloading,
  error,
  cards,
  handleDelete,
  onLike,
}) {
  if (isloading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  if (cards)
    return <Cards cards={cards} handleDelete={handleDelete} onLike={onLike} />;
  return null;
}
CardsFeedback.propTypes = {
  isloading: bool,
  error: object,
  cards: arrayOf(object),
  handleDelete: func,
  onLike: func,
};
