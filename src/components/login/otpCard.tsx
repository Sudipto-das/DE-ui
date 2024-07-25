import React, { useState } from "react";

const OtpCard: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) { // Allow only single digit
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
