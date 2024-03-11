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
    const userDetails=jwtDecode(myToken)
    userDetails.isBusiness=userDetails.isBusiness==="true"
    userDetails.isAdmin=userDetails.isAdmin==="true"

    return userDetails
  } catch (error) {
    return null;
  }
};
