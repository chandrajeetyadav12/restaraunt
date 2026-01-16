import axios from "axios";


export const registerUser = (formData) => {
  return axios.post(`${API_URL}/register`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const loginUser = (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, data);
};

export const logoutUser = (token) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
// GET PROFILE
export const getProfile = (token) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// UPDATE PROFILE
export const updateProfile = (formData, token) => {
  return axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};