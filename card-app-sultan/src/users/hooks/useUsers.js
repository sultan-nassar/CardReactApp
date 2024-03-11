import { useCallback, useMemo, useState } from "react";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import {
  editUser,
  getUserData,
  login,
  signup,
} from "../services/userApiService";
import {
  removeToken,
  setTokenInLocalStorage,
  getUser,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/nomalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";

export default function useUsers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { setToken, setUser, user } = useUser();
  const snack = useSnack();

  useAxios();

  const requestStatus = useCallback(
    (loading, error, user = null) => {
      setLoading(loading);
      setError(error);
      setUser(user);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async (user) => {
      try {
        const Token = await login(user);
        setLoading(false);
        setTokenInLocalStorage(Token);
        setToken(Token);
        const getUserFromLocal = getUser();
        requestStatus(false, null, getUserFromLocal);
        navigate(ROUTES.CARDS);
      } catch (error) {
        setLoading(false);
        requestStatus(false, error, null);
      }
    },
    [navigate, setToken, requestStatus]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignUp = useCallback(
    async (userFromTheClient) => {
      try {
        const normalizedUser = normalizeUser(userFromTheClient);
        await signup(normalizedUser);
        await handleLogin({
          email: normalizedUser.email,
          password: normalizedUser.password,
        });
        snack("success", "The user has been successfully created");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [handleLogin, requestStatus, snack]
  );

  const handleGetUser = useCallback(
    async (user_id) => {
      try {
        const user = await getUserData(user_id);
        return user;
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus]
  );

  const handleUpdateUser = useCallback(
    async (user_id, normalizedUser) => {
      try {
        await editUser(user_id, normalizedUser);

        setLoading(false);
        snack("success", "The user has been successfully updated");

        setTimeout(() => navigate(ROUTES.CARDS), 1800);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus, snack]
  );

  const valueU = useMemo(() => {
    return { loading, error, user };
  }, [loading, error, user]);

  return {
    valueU,
    handleLogin,
    handleLogout,
    handleSignUp,
    handleUpdateUser,
    handleGetUser,
    loading,
    error,
    user,
  };
}
