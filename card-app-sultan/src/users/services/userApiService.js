import axios from "axios";

const apiUrl = "http://localhost:8182";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
    //throw new error (error.message)
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
    //throw new error (error.message)
  }
};

export const getUserData = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/user`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editUser = async (user_id, normalizeEditUser) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/users/${user_id}`,
      normalizeEditUser
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
