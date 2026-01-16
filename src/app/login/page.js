"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "@/context/AuthContext";
import { loginUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";
/* ---------------- VALIDATION SCHEMA ---------------- */
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  /* ---------------- SUBMIT HANDLER ---------------- */
  const submitHandler = async (formData) => {
    try {
      // const { data } = await loginUser(formData);
     await login(formData);
      router.push("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
 <div className="container mt-5" style={{ maxWidth: "420px" }}>
  <div className="bg-white p-4 rounded shadow-sm">
    <h3 className="mb-4 text-center">Login</h3>

    <form onSubmit={handleSubmit(submitHandler)} noValidate>
      {/* EMAIL */}
      <div className="mb-3">
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <div className="invalid-feedback">
            {errors.email.message}
          </div>
        )}
      </div>

      {/* PASSWORD */}
      <div className="mb-3">
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <div className="invalid-feedback">
            {errors.password.message}
          </div>
        )}
      </div>

      {/* SUBMIT */}
      <button
        className="btns  w-100"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>

    {/* REGISTER LINK */}
    <p className="text-center mt-3 mb-0">
      New here?{" "}
      <Link href="/register" className=" fw-medium">
        Register
      </Link>
    </p>
  </div>
</div>

  );
}
