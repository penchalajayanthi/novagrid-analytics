import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { forgotPasswordSchema } from "../schemas/auth.schema";
import { sendOtp } from "../services/auth.service";

interface ForgotPasswordForm {
  email: string;
}

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (
    data: ForgotPasswordForm
  ) => {
    try {
      setLoading(true);
      setError("");

      await sendOtp(data.email);

      localStorage.setItem("resetEmail", data.email);

navigate("/otp");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">
        Forgot Password
      </h1>

      <p className="mt-2 text-gray-500">
        Enter your registered email.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full rounded-lg border px-4 py-3"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {error && (
          <div className="rounded-lg bg-red-100 p-3 text-red-600">
            {error}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-white"
        >
          {loading
            ? "Sending OTP..."
            : "Send OTP"}
        </button>

        <p className="text-center">
          <Link
            to="/login"
            className="text-blue-600"
          >
            Back to Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;