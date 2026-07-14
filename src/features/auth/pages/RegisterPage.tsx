import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../schemas/auth.schema";
import type { RegisterForm } from "../types/auth.types";
import { register as registerUser } from "../services/auth.service";
import PasswordStrength from "../components/PasswordStrength";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const {register,handleSubmit,watch,formState: { errors },} = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
const password = watch("password");
  const onSubmit = async (data: RegisterForm) => {
    try {
      setLoading(true);
      setRegisterError("");

      await registerUser(data);

      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        setRegisterError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900">
        Create Account
      </h1>

      <p className="mt-2 text-gray-500">
        Join NovaGrid Analytics today.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        {/* Name */}

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 font-medium">
            Work Email
          </label>

          <input
            type="email"
            placeholder="Enter your work email"
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
          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password")}
              className="w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:border-blue-600"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
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
          <PasswordStrength password={password || ""} />
        </div>

        {/* Confirm Password */}

        <div>
          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={
                showConfirmPassword ? "text" : "password"
              }
              placeholder="Confirm password"
              {...register("confirmPassword")}
              className="w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:border-blue-600"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms */}

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            {...register("acceptTerms")}
          />
          I agree to the Terms & Conditions
        </label>

        {errors.acceptTerms && (
          <p className="text-sm text-red-500">
            {errors.acceptTerms.message}
          </p>
        )}

        {/* Button */}
        {registerError && (
          <div className="rounded-lg bg-red-100 p-3 text-sm text-red-600">
            {registerError}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
        >
          {loading ? "Creating Account..." : "Create Account"}
          
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;