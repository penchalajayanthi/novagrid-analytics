export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface ForgotPasswordForm {
  email: string;
}

export interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

export interface AuthSession {
  token: string;
  user: User;
  rememberMe: boolean;
}