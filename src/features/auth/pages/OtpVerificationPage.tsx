import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { sendOtp } from "../services/auth.service";

const OtpVerificationPage = () => {
  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail") || "";
  const generatedOtp = localStorage.getItem("resetOtp") || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const [seconds, setSeconds] = useState(30);
  const [expiryTime, setExpiryTime] = useState(300); // 5 minutes
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown Timer
  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    if (expiryTime === 0) return;

    const timer = setInterval(() => {
      setExpiryTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryTime]);
  const minutes = Math.floor(expiryTime / 60);
  const remainingSeconds = expiryTime % 60;
  // Input Change
  const handleChange = (
    value: string,
    index: number
  ) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  // Paste OTP
  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .trim();

    if (!/^\d{6}$/.test(pasted)) return;

    const digits = pasted.split("");

    setOtp(digits);

    digits.forEach((digit, index) => {
      if (inputs.current[index]) {
        inputs.current[index]!.value = digit;
      }
    });

    inputs.current[5]?.focus();
  };

  // Verify OTP
  const handleVerify = () => {
    if (expiryTime === 0) {
      setError("OTP has expired. Please resend a new OTP.");
      return;
    }

    const enteredOtp = otp.join("");

    if (enteredOtp !== generatedOtp) {
      setError("Invalid OTP");
      return;
    }

    navigate("/reset-password");
  };

  // Resend OTP
  const handleResend = async () => {
    await sendOtp(email);

    setOtp(["", "", "", "", "", ""]);

    inputs.current[0]?.focus();

    setSeconds(30);
    setExpiryTime(300);
    setError("");
  };


  return (
    <div className="w-full">

      <h1 className="text-3xl font-bold">
        OTP Verification
      </h1>

      <p className="mt-2 text-gray-500">
        Enter the 6-digit OTP sent to
      </p>

      <p className="font-semibold text-blue-600">
        {email}
      </p>

      {/* Development Card */}

      <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-4">

        <h3 className="font-semibold text-yellow-800">
          Development Mode
        </h3>

        <p className="mt-1 text-sm text-yellow-700">
          Normally the OTP is sent to the user's email.
          Since this project is frontend-only, use the OTP below.
        </p>

        <div className="mt-4 text-center">

          <p className="text-sm text-gray-500">
            Demo OTP
          </p>

          <p className="text-3xl font-bold tracking-[10px] text-blue-700">
            {generatedOtp}
          </p>

        </div>

      </div>

      {/* OTP Boxes */}

      <div className="mt-8 flex justify-between gap-3">

        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputs.current[index] = el;
            }}
            maxLength={1}
            value={digit}
            onPaste={handlePaste}
            onChange={(e) =>
              handleChange(
                e.target.value,
                index
              )
            }
            onKeyDown={(e) =>
              handleKeyDown(e, index)
            }
            className="h-14 w-14 rounded-lg border text-center text-2xl font-bold outline-none focus:border-blue-600"
          />
        ))}

      </div>

      {error && (
        <p className="mt-4 text-center text-red-500">
          {error}
        </p>
      )}

      {/* Verify */}

      <button
        onClick={handleVerify}
        className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Verify OTP
      </button>


      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="text-sm text-gray-500">
          OTP expires in
        </span>

        <span
          className={`font-semibold ${expiryTime <= 60
              ? "text-red-600"
              : "text-gray-900"
            }`}
        >
          {minutes}:{remainingSeconds
            .toString()
            .padStart(2, "0")}
        </span>
      </div>
      {/* Resend */}

      <div className="mt-6 text-center">

        {seconds > 0 ? (
          <p className="text-gray-500">
            Resend OTP in{" "}
            <span className="font-semibold">
              {seconds}s
            </span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="font-semibold text-blue-600 hover:underline"
          >
            Resend OTP
          </button>
        )}

      </div>

    </div>
  );
};

export default OtpVerificationPage;