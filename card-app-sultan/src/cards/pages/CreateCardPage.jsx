import React from "react";
import useForm from "../../forms/hooks/useForm";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import { useTheme } from "../../providers/ThemeProvider";

export default function CreateCardPage() {
  const { user } = useUser();
  const { handleCreateCard } = useCards();
  const { data, errors, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleCreateCard
  );

  const { isDark } = useTheme();

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        color: isDark ? "white" : "primary",
      }}
    >
      <CardForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={data}
        title="Create A New Card"
      />
    </Container>
  );
}
