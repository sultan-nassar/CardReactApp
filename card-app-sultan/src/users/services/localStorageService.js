import jwtDecode from "jwt-decode";

const TOKEN = "token";

export const setTokenInLocalStorage = (encryptedToken) => {
  localStorage.setItem(TOKEN, encryptedToken);
};
export const removeToken = () => localStorage.removeItem(TOKEN); // when we do logout
export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
  try {
    const myToken = localStorage.getItem(TOKEN);
    return jwtDecode(myToken);
  } catch (error) {
    return null;
  }
};
