import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { AppContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { handleLogin,} from "../../functions/api/login/verifyOtp";

interface OtpCardProps {
  phone: string;
  countryCode: string;
}

const OtpCard: React.FC<OtpCardProps> = ({ phone, countryCode }) => {

  const {
    setData: setLoggedInUser,
    raiseToast,
    setLoading,
  } = React.useContext(AppContext);
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input field
      if (value && index < 5) {
        const nextSibling = document.getElementById(`otp-${index + 1}`);
        if (nextSibling) {
          (nextSibling as HTMLInputElement).focus();
        }
      }
    }
  };

  const mutation = useMutation({
    mutationFn: () => handleLogin({
      otp: otp.join(''),
      countryCode: countryCode,
      phone: phone
    }),
    onMutate: () => {
      setLoading(true); // Start loading
    },
    onSuccess: (data) => {
      console.log("OTP verified successfully:", data);
      setLoggedInUser(data);
      raiseToast("Login successful!", "success");
      navigate("/dashboard/");
    },
    onError: (error: any) => {
      console.error("Error verifying OTP:", error);
      raiseToast("Error", "error", error.message || "Server error");
    },
    onSettled: () => {
      setLoading(false); // Stop loading regardless of success or error
    },
  });

  const handleVerify = () => {
    mutation.mutate();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-inter">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Verify</h1>
          <p className="mt-2 text-gray-600">Your code was sent to you via phone number</p>
        </div>
        <div className="flex justify-center mb-4">
          {otp.map((data, index) => (
            <input
              autoComplete="off"
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md mx-1"
            />
          ))}
        </div>
        <button
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
          onClick={handleVerify}
        >
          Verify
        </button>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Didn't receive code? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Request again</a></span>
        </div>
      </div>
    </div>
  );
};

export default OtpCard;
