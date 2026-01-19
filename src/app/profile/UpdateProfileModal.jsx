"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "@/context/AuthContext";
import { updateProfile } from "@/services/authService";
import { toast } from "react-toastify";
//  VALIDATION SCHEMA

const updateProfileSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  image: yup.mixed(),
});

export default function UpdateProfileModal({ onClose }) {
  const { user, updateUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(updateProfileSchema),
    defaultValues: {
      name: user?.name || "",
    },
  });

  const onSubmit = async (values) => {
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Please login again");

    const formData = new FormData();
    formData.append("name", values.name);
    if (values.image) formData.append("image", values.image);

    try {
      const { data } = await updateProfile(formData, token);
      updateUser(data.user);
      toast.success("Profile updated successfully");
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    /* ===== MODAL OVERLAY (INLINE STYLE – WORKING) ===== */
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 999999,
      }}
      onClick={onClose}
    >
      {/* ===== MODAL BOX ===== */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "20px",
          maxWidth: "500px",
          borderRadius: "8px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Update Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
          className="updateProfileInput"
            type="text"
            placeholder="Name"
            {...register("name")}
            style={{ width: "100%", marginBottom: "8px" }}
          />
          {errors.name && (
            <p style={{ color: "red" }}>{errors.name.message}</p>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setValue("image", e.target.files[0])}
          />

          <div style={{ marginTop: "15px" }}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Save"}
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
