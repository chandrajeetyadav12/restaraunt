"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import UpdateProfileModal from "./UpdateProfileModal";

const DEFAULT_AVATAR = "/assets/img/profile/profile.png";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  if (!user) {
    return <p>Please login ...</p>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow text-center p-4">
            <img
              src={user?.image || DEFAULT_AVATAR}
              className="rounded-circle mx-auto mb-3"
              width="100"
              height="100"
              alt="Profile"
            />

            <h5 className="mb-1">{user?.name}</h5>
            <p className="text-muted mb-3">{user?.email}</p>

            <button
              className="btns  btn-sm"
              onClick={() => setOpen(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {open && <UpdateProfileModal onClose={() => setOpen(false)} />}
    </div>

  );
}
