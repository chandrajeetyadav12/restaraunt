"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const DEFAULT_AVATAR = "/assets/img/profile/profile.png";

export default function UserMenu({ user, logout, setMobileToggle }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ======================
     NOT LOGGED IN
  ======================= */
  if (!user) {
    return (
      <div className="auth-links">
        <Link href="/login" onClick={() => setMobileToggle?.(false)}>
          Login
        </Link>
        <Link href="/register" onClick={() => setMobileToggle?.(false)}>
          Register
        </Link>
      </div>
    );
  }


const userImage = user?.image ? user.image : DEFAULT_AVATAR;

  /* ======================
     LOGGED IN
  ======================= */
  return (
    <div ref={menuRef} className="cs_user_menu">
      {/* TRIGGER (AVATAR) */}
      <div
        className="cs_user_trigger px-3"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
        width="40px"
        height="40px"
          src={userImage}
          alt="User Avatar"
          className="rounded-circle  mb-3"
        />
        <span>{user.name}</span>
      </div>

      {/* DROPDOWN */}
      <div className={`cs_user_dropdown ${open ? "active" : ""}`}>
        {/* <div className="cs_user_info">
          <strong>{user.name}</strong>
          <small>{user.email}</small>
        </div> */}

        <Link
          href="/profile"
          onClick={() => {
            setOpen(false);
            setMobileToggle?.(false);
          }}
        >
          Profile
        </Link>

        <Link
          href="#"
          onClick={() => {
            setOpen(false);
            setMobileToggle?.(false);
          }}
        >
          My Orders
        </Link>

        <button
          className="logout-btn"
          onClick={() => {
            logout();
            setOpen(false);
            setMobileToggle?.(false);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
