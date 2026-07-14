export interface PasswordStrengthResult {
  score: number;
  label: string;
  color: string;
}

export const getPasswordStrength = (
  password: string
): PasswordStrengthResult => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  switch (score) {
    case 0:
    case 1:
      return {
        score: 25,
        label: "Weak",
        color: "bg-red-500",
      };

    case 2:
      return {
        score: 50,
        label: "Fair",
        color: "bg-yellow-500",
      };

    case 3:
      return {
        score: 75,
        label: "Good",
        color: "bg-blue-500",
      };

    case 4:
      return {
        score: 100,
        label: "Strong",
        color: "bg-green-500",
      };

    default:
      return {
        score: 0,
        label: "",
        color: "",
      };
  }
};