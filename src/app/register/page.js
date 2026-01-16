"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "@/services/authService";
import { useState } from "react";
import Link from "next/link";

/* ===== MUI ===== */
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

/* =========================
   YUP SCHEMA (SAME FILE)
========================= */
const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),

  image: yup
    .mixed()
    .nullable()
    .test("fileSize", "Image is too large (max 2MB)", (value) => {
      if (!value?.length) return true;
      return value[0].size <= 2 * 1024 * 1024;
    })
    .test("fileType", "Only JPG/PNG allowed", (value) => {
      if (!value?.length) return true;
      return ["image/jpeg", "image/png"].includes(value[0].type);
    }),
});

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitHandler = async (values) => {
    const data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("password", values.password);

    if (values.image?.[0]) {
      data.append("image", values.image[0]);
    }

    try {
      await registerUser(data);
      alert("Registered successfully");
      router.push("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "420px" }}>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="mb-4 text-center">Register</h3>

        <form onSubmit={handleSubmit(submitHandler)} noValidate>
          {/* NAME */}
          <div className="mb-3">
            <input
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Name"
              {...register("name")}
            />
            <div className="invalid-feedback">
              {errors.name?.message}
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
              {...register("email")}
            />
            <div className="invalid-feedback">
              {errors.email?.message}
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                {...register("password")}
              />

              <span className="input-group-text bg-white">
                <IconButton
                  size="small"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </span>

              <div className="invalid-feedback">
                {errors.password?.message}
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="mb-3">
            <input
              type="file"
              className={`form-control ${errors.image ? "is-invalid" : ""}`}
              accept="image/*"
              {...register("image")}
            />
            <div className="invalid-feedback">
              {errors.image?.message}
            </div>
          </div>

          {/* SUBMIT */}
          <button
            className="btns w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link href="/login" className="fw-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
