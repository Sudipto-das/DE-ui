import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { fetchCountryCodes } from '../../functions/api/fetchCountryCode';
import { CountryCode } from '../../types/countryCode';

const Consolation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState('17:00');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const { data: countryCodes } = useQuery<CountryCode[]>({
    queryKey: ['countryCodes'],
    queryFn: fetchCountryCodes
  });

  return (
    <div className=" mx-auto p-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Booking Date & Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center flex-col ">
          <h1 className='text-[#23262F] text-[12px] block my-2 font-[700] uppercase'>Select Date</h1>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md  ">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              styles={{
                caption: {
                  color: '#4CAF50',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
                day: {
                  fontSize: '1rem',
                  padding: '0.75rem 1.5rem',
                  transition: 'background-color 0.3s ease',
                },
                selected: {
                  backgroundColor: '#4CAF50',
                  color: 'white',
                },
                today: {
                  color: '#4CAF50',
                },

              }}
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="text-[#23262F] text-[12px] block my-2 font-[700] uppercase">Phone Number</label>
            <div className="flex items-center space-x-3 mt-2">
              <select
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="" className='text-xs'>Country code...</option>
                {countryCodes?.map(({ code, name }) => (
                  <option key={`${code}-${name}`} value={code}>
                    ({code})
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 p-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[#23262F] text-[12px] block my-2 font-[700] uppercase">Time Slot</label>
            <input
              type="time"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-green-700  px-6 py-3 rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center space-x-2 transition ease-in-out duration-150">
          <span className='font-bold text-white'>Send to us</span>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="#ffffff" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Consolation;
