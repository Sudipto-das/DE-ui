import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { verifyOtp } from "../../functions/api/login/verifyOtp";
import { AppContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

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

  const handleLogin = async ({ otp, countryCode, phone }: { otp: string, countryCode: string, phone: string }) => {

    setLoading(true);

    try {
      const response = await verifyOtp({ otp, countryCode, phone })

      if (response.status === 200) {
        console.log(response.data);

        setLoggedInUser(response.data);
        raiseToast("Login successful!", "success");
        navigate("/dashboard/");
      } else {
        raiseToast("Error", "error", response.message);
      }
    } catch (error: any) {
      console.log(error);
      
      raiseToast(
        "Error",
        "error",
        error.response?.message || "Server error"
      );
    } finally {
      setLoading(false);
    }
  };



  const mutation = useMutation({
    mutationFn: handleLogin,
    onSuccess: (data) => {
      console.log("OTP verified successfully:", data);
      // Handle success (e.g., navigate to another page, show a success message)
    },
    onError: (error) => {
      console.error("Error verifying OTP:", error);
      // Handle error (e.g., show an error message)
    },
  });

  const handleVerify = () => {
    const otpString = otp.join('');
    mutation.mutate({ otp: otpString, countryCode: countryCode, phone: phone });
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
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
