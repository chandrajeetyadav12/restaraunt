"use client";

import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";
import { addToCartAPI, getCartAPI, clearCartAPI } from "@/services/cartService";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const CartContext = createContext();

const initialState = {
    cart: null,
    loading: false,
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const { token } = useContext(AuthContext);

    //  Load cart (optional, for page refresh)
    const loadCart = async () => {
        if (!token) return;
        try {
            dispatch({ type: "CART_LOADING" });
            const { data } = await getCartAPI(token);
            dispatch({ type: "SET_CART", payload: data });
        } catch (error) {
            console.error(error);
        }
    };

    // Add to cart
    const addToCart = async (menuItemId, quantity = 1) => {
        if (!token) {
            toast.error("Please login to add items");
            return;
        }
        const prevQty =
            state.cart?.items?.find(
                (i) => i.menuItem?._id.toString() === menuItemId.toString()
            )?.quantity || 0;

        try {
            dispatch({ type: "CART_LOADING" });
            const { data } = await addToCartAPI(token, menuItemId, quantity);
            dispatch({ type: "ADD_TO_CART", payload: data });

            //  Accurate toasts
            if (quantity > 0 && prevQty === 0) {
                toast.success("Item added to cart");
            } else if (quantity > 0) {
                toast.success("Quantity increased by 1");
            } else if (quantity < 0 && prevQty > 1) {
                toast.info("Quantity decreased by 1");
            } else {
                toast.info("Item removed from cart");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to add item");
        }
    };

    //  Clear cart
    const clearCart = async () => {
        if (!token) return;
        await clearCartAPI(token);
        dispatch({ type: "CLEAR_CART" });
    };
    const getItemQuantity = (menuItemId) => {
        if (!state.cart) return 0;

        const item = state.cart.items.find(
            (i) => i.menuItem._id.toString() === menuItemId.toString()
        );

        return item ? item.quantity : 0;
    };
    const getCartCount = () => {
        if (!state.cart || !state.cart.items) return 0;

        return state.cart.items.reduce(
            (total, item) => total + item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                loading: state.loading,
                addToCart,
                loadCart,
                clearCart,
                getItemQuantity,
                getCartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
