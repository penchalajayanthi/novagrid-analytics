import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/auth.schema";
import { login } from "../services/auth.service";
import type { LoginForm } from "../types/auth.types";
import { useAuthStore } from "../../../store/authStore";

const LoginPage = () => {
  const navigate = useNavigate();
const loginToStore = useAuthStore((state) => state.login);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

 const onSubmit = async (data: LoginForm) => {
  try {
    setLoading(true);
    setLoginError("");

    const user = await login(data);

    loginToStore(user, data.rememberMe);

    console.log("Logged in user:", user);
    console.log("After login:", useAuthStore.getState());

    navigate("/");
  } catch (error) {
    if (error instanceof Error) {
      setLoginError(error.message);
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome Back
      </h1>

      <p className="mt-2 text-gray-500">
        Sign in to continue to NovaGrid Analytics.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        {/* Email */}

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className="w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:border-blue-600"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              {showPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me */}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register("rememberMe")}
            />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Error */}

        {loginError && (
          <div className="rounded-lg bg-red-100 p-3 text-sm text-red-600">
            {loginError}
          </div>
        )}

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {/* Register */}

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;