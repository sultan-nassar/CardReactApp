import { Grid } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import BusinessCard1 from "../components/card/BusinessCard1";
import cardType from "../models/cardType";

export default function Cards({ cards, handleDelete, onLike, handleEdit }) {
  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BusinessCard1
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              onLike={onLike}
              handleEdit={handleEdit}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
