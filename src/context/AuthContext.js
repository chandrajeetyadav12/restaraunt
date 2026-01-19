"use client";

import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./AuthReducer";
import { getProfile, logoutUser,loginUser } from "../services/authService";

export const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export const AuthProvider = ({ children }) => {
  const token =
  typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;

  const [state, dispatch] = useReducer(authReducer, initialState);

  /* ======================
     LOAD USER ON REFRESH
  ======================= */
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    // Restore user immediately (NO auto logout)
    if (token && storedUser) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: JSON.parse(storedUser),
      });
      return;
    }

    //  No token → stop loading
    if (!token) {
      dispatch({ type: "AUTH_DONE" });
      return;
    }

    //  Optional: sync with backend
    const fetchProfile = async () => {
      try {
        const { data } = await getProfile(token);

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data,
        });
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
      }
    };

    fetchProfile();
  }, []);



  /* ======================
     LOGIN
  ======================= */
  const login = async (credentials) => {
    const { data } = await loginUser(credentials);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  };

  /* ======================
     LOGOUT
  ======================= */
  const logout = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await logoutUser(token);
      } catch (e) {
        console.error("Logout failed");
      }
    }
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };
const updateUser = (updatedUser) => {
  localStorage.setItem("user", JSON.stringify(updatedUser));

  dispatch({
    type: "LOGIN_SUCCESS",
    payload: updatedUser,
  });
};

  return (
    <AuthContext.Provider
      value={{
        user: state?.user,
        isAuthenticated: state?.isAuthenticated,
        loading: state.loading,
        token,
        login,
        logout,
        updateUser
      }}
    >
      {!state.loading && children}
    </AuthContext.Provider>
  );
};
