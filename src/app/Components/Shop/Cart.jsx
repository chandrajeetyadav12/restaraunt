"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";

const Cart = () => {
    const { cart, loadCart, addToCart } = useContext(CartContext);

    useEffect(() => {
        loadCart(); // fetch cart items on mount
    }, []);

    if (!cart || cart.items.length === 0) {
        return <p className="text-center mt-5">Your cart is empty</p>;
    }

    return (
        <div className="th-cart-wrapper section-padding fix bg-white">
            <div className="container">
                <table className="cart_table table">
                    <thead>
                        <tr>
                            <th>Menu Image</th>
                            <th>Menu Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <Link href={`/shop/shop-details/${item.menuItem._id}`}>
                                        {item.menuItem.image && (
                                            <Image
                                                src={item.menuItem.image}
                                                alt={item.menuItem.name}
                                                width={91}
                                                height={91}
                                            />
                                        )}
                                    </Link>
                                </td>
                                <td>
                                    <Link href={`/shop/shop-details/${item.menuItem._id}`}>
                                        {item.menuItem.name}
                                    </Link>
                                </td>
                                <td>₹{item.menuItem.price}</td>
                                <td>
                                    <div className="quantity d-flex align-items-center gap-2">

                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => addToCart(item.menuItem._id, -1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            className="qty-input text-center"
                                            value={item.quantity}
                                            readOnly
                                        />
                                        <button
                                            className="btn btn-sm btn-outline-success"
                                            onClick={() => addToCart(item.menuItem._id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>₹{item.quantity * item.menuItem.price}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => addToCart(item.menuItem._id, -item.quantity)}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4">Total Price</th>
                            <th colSpan="2">₹{cart.totalPrice}</th>
                        </tr>
                    </tfoot>
                </table>

                {/* <div className="mt-4 d-flex justify-content-between">
                    <Link href="/shop" className="btn btn-outline-primary">
                        Continue Shopping
                    </Link>
                    <Link href="/shop/checkout" className="btn btn-primary">
                        Proceed to Checkout
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Cart;
