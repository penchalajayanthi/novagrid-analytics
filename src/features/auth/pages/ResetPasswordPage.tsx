import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { resetPasswordSchema } from "../schemas/auth.schema";
import { resetPassword } from "../services/auth.service";
import { getPasswordStrength } from "../utils/passwordStrength";
import type { ResetPasswordForm } from "../types/auth.types";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const password = watch("password") || "";

  const strength = getPasswordStrength(password);

  const onSubmit = async (data: ResetPasswordForm) => {
    setLoading(true);

    await resetPassword(data.password);

    setOpenSnackbar(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
    setLoading(false);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">
        Reset Password
      </h1>

      <p className="mt-2 text-gray-500">
        Create a new password for your account.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        {/* Password */}

        <div>
          <label className="block mb-2 font-medium">
            New Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter new password"
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
                <FiEyeOff />
              ) : (
                <FiEye />
              )}
            </button>

          </div>

          {errors.password && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Strength */}

        {password && (
          <div>
            <div className="h-2 rounded bg-gray-200">
              <div
                className={`h-2 rounded ${strength.color}`}
                style={{
                  width: `${strength.score}%`,
                }}
              />
            </div>

            <p className="mt-2 text-sm">
              Password Strength:
              <span className="font-semibold">
                {" "}
                {strength.label}
              </span>
            </p>
          </div>
        )}
        {/* Confirm */}

        <div>
          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <div className="relative">

            <input
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm password"
              className="w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:border-blue-600"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm(!showConfirm)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? (
                <FiEyeOff />
              ) : (
                <FiEye />
              )}
            </button>

          </div>

          {errors.confirmPassword && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading
            ? "Updating..."
            : "Update Password"}
        </button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
        >
          Password updated successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ResetPasswordPage;