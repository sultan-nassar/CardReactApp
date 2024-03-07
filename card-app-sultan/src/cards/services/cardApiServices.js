import axios from "axios";

const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://dotnetcardsserver20240307184945.azurewebsites.net/api";
// "https://localhost:7079/api";
export const getCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
    //throw new error (error.message)
  }
};
export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyCards = async (user_Id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/my-cards/${user_Id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
    //throw new Error(error.message);
  }
};
export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    console.log(card);
    const { data } = await axios.post(`${apiUrl}/cards`, card);
    console.log(data);

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

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/cards/${cardId}`,
      normalaizedCard
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId, user_id) => {
  try {
    const { data } = await axios.patch(
      `${apiUrl}/cards/${cardId}/like/${user_id}`
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
