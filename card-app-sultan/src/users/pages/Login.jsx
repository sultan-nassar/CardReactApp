import React from "react";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import { useTheme } from "../../providers/ThemeProvider";
import PageHeader from "../../components/PageHeader";

export default function Login() {
  const { user } = useUser();
  const { handleLogin } = useUsers();
  const { data, errors, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );
  const { isDark } = useTheme();
  if (user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }

  return (
    <div>
      <Container
        sx={{
          color: isDark ? "white" : "primery",
        }}
      >
        <PageHeader
          title="Login Page"
          subtitle="Here you can Log in to your Account"
        />
        <Container
          sx={{
            pt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: isDark ? "white" : "primery",
          }}
        >
          <Form
            title="Login Form "
            onSubmit={rest.onSubmit}
            onReset={rest.handleReset}
            styles={{ maxWidth: "450 px" }}
            validateForm={rest.validateForm}
            to={ROUTES.SANDBOX}
          >
            <Input
              label={"email"}
              name={"email"}
              data={data}
              error={errors.email}
              onChange={rest.handleChange}
            />
            <Input
              label={"Password"}
              name={"password"}
              data={data}
              error={errors.password}
              onChange={rest.handleChange}
              type="password"
            />
          </Form>
        </Container>
      </Container>
    </div>
  );
}
