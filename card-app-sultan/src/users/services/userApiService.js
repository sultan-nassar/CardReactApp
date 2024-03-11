import axios from "axios";

const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://localhost:7079/api";
// "https://localhost:7079/api";

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
    console.error("Error making request:", error.message); // Log error message
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received for the request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error.message);
  }
};

export const getUserData = async (user_id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/users/${user_id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editUser = async (user_id, normalizeEditUser) => {
  console.log("Attempting to edit user with ID:", user_id); // Log user ID
  console.log("API URL:", `${apiUrl}/users/${user_id}`); // Log the full API URL
  console.log("Data being sent to server:", normalizeEditUser); // Log the data being sent

  try {
    const response = await axios.put(
      `${apiUrl}/users/${user_id}`,
      normalizeEditUser
    );
    console.log("Server response data:", response.data); // Log response data from server
    return response.data;
  } catch (error) {
    console.error("Error making request:", error.message); // Log error message
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received for the request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error.message);
  }
};

// export const editUser = async (user_id, normalizeEditUser) => {
//   try {
//     console.log(`${apiUrl}/users/${user_id}`);
//     const { data } = await axios.put(
//       `${apiUrl}/users/${user_id}`,
//       normalizeEditUser
//     );
//     return data;
//   } catch (error) {
//     return Promise.reject(error.message);
//   }
// };
