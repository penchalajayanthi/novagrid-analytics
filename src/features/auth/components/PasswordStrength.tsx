import { getPasswordStrength } from "../utils/passwordStrength";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength = ({
  password,
}: PasswordStrengthProps) => {
  if (!password) return null;

  const strength = getPasswordStrength(password);

  return (
    <div className="mt-3">
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
          style={{
            width: `${strength.score}%`,
          }}
        />
      </div>

      <p className="mt-2 text-sm font-medium text-gray-600">
        Password Strength:
        <span className="ml-2">
          {strength.label}
        </span>
      </p>
    </div>
  );
};

export default PasswordStrength;