import { create } from "zustand";
import type { User } from "../features/auth/types/auth.types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  login: (user: User, rememberMe: boolean) => void;
  logout: () => void;
}

const savedUser = localStorage.getItem("authUser");

export const useAuthStore = create<AuthState>((set) => ({
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: !!savedUser,

login: (user, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem("authUser", JSON.stringify(user));
    console.log("Saved to localStorage");
  } else {
    localStorage.removeItem("authUser");
    console.log("Removed from localStorage");
  }

  console.log("Current authUser:", localStorage.getItem("authUser"));

  set({
    user,
    isAuthenticated: true,
  });
},

  logout: () => {
    localStorage.removeItem("authUser");

    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));