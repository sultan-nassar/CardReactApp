import React from "react";
import UserForm from "../components/UserForm";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProvider";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../providers/ThemeProvider";
import PageHeader from "../../components/PageHeader";

export default function SignUp() {
  const { user } = useUser();
  const { handleSignUp } = useUsers();
  const { data, errors, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignUp
  );
  const { isDark } = useTheme();
  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container
      sx={{
        color: isDark ? "white" : "primery",
      }}
    >
      {" "}
      <PageHeader
        title="Sign Up Page"
        subtitle="Here you can Sign up to the site"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          color: isDark ? "white" : "primery",
        }}
      >
        <UserForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          validateForm={rest.validateForm}
          title="Sign UP form"
          errors={errors}
          data={data}
          onInputChange={rest.handleChange}
          setData={rest.setData}
        />
      </Container>
    </Container>
  );
}
