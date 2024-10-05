
import React from "react";
import Input from "../interface/input";

export default function InputFile(props: Input) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (props.onFileChange) {
      props.onFileChange(props.name, e);
    }
  }

  return (
    <div className={"text-start my-4 " + props.inputClassName}>
      <div className="w-full mx-auto border-2 border-[#004D3D] relative rounded-lg ">
        <input
          type="file"
          accept="image/*"
          name={props.name ? props.name : "File"}
          disabled={props.disabled ? true : false}
          defaultValue={props.defValue}
          placeholder={props.placeholder ? props.placeholder : `Enter Name`}
          onChange={(e) => onChange(e)}
          className={
            " absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
          }
          style={{ borderColor: "rgb(189, 189, 189)" }}
        />
        <div className="relative z-0 text-center py-12 flex justify-center items-center flex-col">
          <svg
            width="70"
            height="53"
            viewBox="0 0 70 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1537_8)">
              <path
                d="M56.5967 21.5114C55.885 10.5603 48.2217 0 34.1667 0C21.3117 0 11.3983 9.49528 10.8733 22.1672C3.84 24.3419 0 31.8215 0 37.2656C0 45.6479 7.01 53 15 53H25.8333C26.0543 53 26.2663 52.9128 26.4226 52.7575C26.5789 52.6021 26.6667 52.3915 26.6667 52.1719C26.6667 51.9522 26.5789 51.7416 26.4226 51.5863C26.2663 51.431 26.0543 51.3438 25.8333 51.3438H15C7.89667 51.3438 1.66667 44.7651 1.66667 37.2656C1.66667 32.2124 6.12333 23.1875 15 23.1875H17.5C17.721 23.1875 17.933 23.1003 18.0893 22.9449C18.2455 22.7896 18.3333 22.579 18.3333 22.3594C18.3333 22.1397 18.2455 21.9291 18.0893 21.7738C17.933 21.6185 17.721 21.5312 17.5 21.5312H15C14.1517 21.5312 13.35 21.6257 12.5683 21.7615C13.2217 11.8405 20.81 1.65625 34.1667 1.65625C48.48 1.65625 55 12.8177 55 23.1875V25.6719C55 25.8915 55.0878 26.1021 55.2441 26.2574C55.4004 26.4128 55.6123 26.5 55.8333 26.5C56.0543 26.5 56.2663 26.4128 56.4226 26.2574C56.5789 26.1021 56.6667 25.8915 56.6667 25.6719V23.1726C61.6983 23.7208 68.3333 29.0871 68.3333 37.2656C68.3333 43.6024 62.1817 51.3438 55 51.3438H42.5C37.1033 51.3438 35 49.2536 35 43.8906V21.1718L41.7967 27.9128C41.8734 27.992 41.9653 28.0552 42.0669 28.0987C42.1685 28.1423 42.2778 28.1653 42.3885 28.1664C42.4991 28.1675 42.6089 28.1467 42.7113 28.1052C42.8138 28.0637 42.9069 28.0023 42.9853 27.9247C43.0636 27.847 43.1256 27.7547 43.1677 27.653C43.2097 27.5513 43.231 27.4422 43.2302 27.3323C43.2294 27.2223 43.2065 27.1136 43.163 27.0125C43.1195 26.9114 43.0561 26.82 42.9767 26.7435L35.5417 19.3698C34.5517 18.3893 33.7833 18.3893 32.795 19.3698L25.36 26.7435C25.2082 26.8997 25.1242 27.1088 25.1261 27.326C25.128 27.5431 25.2156 27.7508 25.3702 27.9044C25.5247 28.0579 25.7337 28.145 25.9522 28.1469C26.1707 28.1488 26.3812 28.0653 26.5383 27.9144L33.3333 21.1718V43.8906C33.3333 50.191 36.16 53 42.5 53H55C63.0783 53 70 44.3478 70 37.2656C70 28.7078 62.9617 22.0149 56.5967 21.5114Z"
                fill="#004D3D"
              />
            </g>
            <defs>
              <clipPath id="clip0_1537_8">
                <rect width="70" height="53" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-[14px] mx-auto my-3 text-center">Choose or Drop a Photo</p>
        </div>
      </div>
      {props.error && <p className="text-[12px] text-red-500">{props.error}</p>}
    </div>
  );
}

