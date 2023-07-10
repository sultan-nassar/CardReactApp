import React, { useEffect } from "react";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import mapUserToModel from "../helpers/nomalization/mapUserToModel";
import editUserSchema from "../models/joi-schema/EditUserSchema";
import normalizeEditUser from "../helpers/nomalization/normalizeEditUser";
import EditUserForm from "../components/EditUserForm";
import initialEditUserForm from "../helpers/initialForms/initialEditUserForm";
import { Navigate } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import ROUTES from "../../routes/routesModel";

export default function EditAccount() {
  const { handleUpdateUser, handleGetUser } = useUsers();

  //user - useUser (provider)
  const { user } = useUser();
  //useForm (initialForm,schema,onSubmit)
  const { value, ...rest } = useForm(
    initialEditUserForm,
    editUserSchema,
    () => {
      handleUpdateUser(user.id, {
        ...normalizeEditUser({ ...value.data }),
      });
    }
  );

  useEffect(() => {
    handleGetUser(user.id).then((data) => {
      const modelUser = mapUserToModel(data);
      rest.setData(modelUser);
    });
  }, []);

  const { isDark } = useTheme();
  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  } else
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
        <EditUserForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          validateForm={rest.validateForm}
          title="Update User"
          errors={value.errors}
          data={value.data}
          onInputChange={rest.handleChange}
          setData={rest.setData}
        />
      </Container>
    );
}
