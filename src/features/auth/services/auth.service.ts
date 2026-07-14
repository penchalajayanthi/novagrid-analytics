import { users } from "../../../data/users";
import type {LoginForm,RegisterForm,User,} from "../types/auth.types";
import { generateOtp } from "../utils/otpGenerator";

export const login = async (
  data: LoginForm
): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Entered Data:", data);
  console.log("Available Users:", users);

  const user = users.find(
    (user) =>
      user.email === data.email &&
      user.password === data.password
  );

  console.log("Matched User:", user);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  return user;
};

export const register = async (
  data: RegisterForm
): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const existingUser = users.find(
    (user) => user.email === data.email
  );

  if (existingUser) {
    throw new Error("Email already exists.");
  }

  const newUser: User = {
    id: String(users.length + 1),
    name: data.name,
    email: data.email,
    password: data.password,
    role: "Administrator",
  };

  users.push(newUser);

  return newUser;
};

export const sendOtp = async (
  email: string
): Promise<string> => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  const user = users.find(
    (user) => user.email === email
  );

  if (!user) {
    throw new Error("No account found with this email.");
  }

  const otp = generateOtp();

  localStorage.setItem("resetOtp", otp);
  localStorage.setItem("resetEmail", email);

  console.log("Generated OTP:", otp);

  return otp;
};

export const resetPassword = async (
  password: string
): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Password changed:", password);

  localStorage.removeItem("resetOtp");
  localStorage.removeItem("resetEmail");
};