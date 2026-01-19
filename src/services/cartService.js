import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/cart`;

export const addToCartAPI = (token, menuItemId, quantity = 1) => {
  return axios.post(
    `${API_URL}/add`,
    { menuItemId, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getCartAPI = (token) => {
  return axios.get(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const clearCartAPI = (token) => {
  return axios.delete(`${API_URL}/clear`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
